
import { useCreation } from './hooks/'
import React, { useMemo, useState } from 'react'
import MockMemo from './MockMemo'
import Demo1 from './hooks/demo/useCopyToClipboard'

function App() {
    const [_, setFlag] = useState<boolean>(false)

    const getNowData = () => {
      return Math.random()
    }

    const nowData = useCreation(() => getNowData(), []);

    const memoDate = useMemo(() => getNowData(), []);


    return (
      <div style={{padding: 50}}>
        {/* <div>正常的函数： {getNowData()}</div>
        <div>useMemo函数： {memoDate}</div>
        <div>useCreation包裹后的： {nowData}</div>
        <button color='primary' onClick={() => {setFlag(v => !v)}}> 渲染</button> */}
        {/* <MockMemo /> */}
        <Demo1 />
      </div>
    )
}
export default App

