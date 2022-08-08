import { useEffect, useRef} from 'react'
const useUnMount = (fn: () => void) => {
    const ref = useRef(fn)
    ref.current = fn;
    useEffect(() => 
        () => {
            fn?.()
        }
    , [])
}
export default useUnMount