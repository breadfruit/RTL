import { useCallback, useEffect, useRef } from 'react'

// 对一些变量做一些初始化的处理
export default function useMountedState(): () => boolean {
    const mountedRef = useRef<boolean>(false)
    const get = useCallback(() => mountedRef.current, [])
    useEffect(() => {
        mountedRef.current = true
        return () => {
            mountedRef.current = false
        }
    },[])
    return get
}