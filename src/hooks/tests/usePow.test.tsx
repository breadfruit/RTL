
import { renderHook, } from '@testing-library/react'
import usePow from '../usePow'
describe('hook', () => {
    test('hook', () => {
        const { result } = renderHook(() => usePow([1, 2, 3]))
        expect(result.current).toEqual([1,4,9])
      })
})