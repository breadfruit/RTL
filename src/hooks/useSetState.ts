import { useCallback, useState } from 'react';

const useSetState = <T extends object >(
    initialState: T = {} as T
): [T, (patch: T | ((prevState: T) => Partial<T>)) => void] => {
    const [state, set] = useState(initialState)
    const setState = useCallback((patch: Partial<T> |((prevState: T) => Partial<T>) ) => {
        set((prevState) => {
            return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch)
        })
    }, [])
    return [state, setState]
}


