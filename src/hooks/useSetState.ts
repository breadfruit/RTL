import path from "path"
import { useState, useCallback } from "react"
}

const useSetState = <T extends object>(
    initialState: T = {} as T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void]=> {
    const [state, set] = useState(initialState)
    const setState = useCallback((patch: Partial<T> | ((prevState: T) => Partial<T>)) => {
        set((prevState) => Object.assign({}, prevState, patch instanceof Function ? patch(prevState): patch))
    }, [])
    return [state, setState]
}