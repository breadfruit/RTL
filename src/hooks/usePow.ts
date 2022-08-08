import { useMemo} from 'react'
const usePow = (list: number[]) => {
    return useMemo(() => list.map((item: number) => {
        console.log(1);
        return Math.pow(item, 2)
    }), [])

}
export default  usePow;