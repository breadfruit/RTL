import { time } from "console"
import { useCallback, useEffect, useRef} from "react"

export default function useDebouceFn (fn: Function, ms: number = 0): [ () => boolean|null, ()=>void, ()=>void]  {
    const ready = useRef<boolean| null>(false);
    const timeout = useRef<ReturnType<typeof setTimeout>>()
    const callback = useRef<Function>(fn)
    const set = useCallback(() => {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
    
        timeout.current = setTimeout(() => {
          ready.current = true;
          callback.current();
        }, ms);
    
    }, [ms]);
    const clear = useCallback(() => {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, [])
    const isReady = useCallback(() => ready.current, []);
    useEffect(() => {
        callback.current = fn
    }, [fn])
    useEffect(() => {
        set()
        return clear()
    })
    return [isReady, set, clear]
}