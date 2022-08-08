import { useMemo, useRef } from 'react'
import type { DependencyList } from 'react'
// 第一点：先确定参数，useCreation 的参数与useMemo的一致，第一个参数是函数，第二个参数参数是可变的数组
// 第二点：我们的值要保存在 useRef中，这样可以将值缓存，从而减少无关的刷新
// 第三点：更新值的判断，怎么通过第二个参数来判断是否更新 useRef里的值。


const depsAreSame = (oldDeps: DependencyList,deps: DependencyList): boolean => {
    if (oldDeps === deps) return true;
    for (let i = 0; i < oldDeps.length; i++) {
        if(!Object.is(oldDeps[i], deps[i])) return false
    }
    return true
    
}

const useCreation = <T>(fn: () => T, deps: DependencyList) => {
    const { current } = useRef({
        deps,
        obj: undefined as undefined | T,
        initialized: false
    })
    if (current.initialized === false || !depsAreSame(current.deps, deps)) {
        current.deps = deps;
        current.obj = fn();
        current.initialized = true
    }
    return current.obj as T

}

export default useCreation