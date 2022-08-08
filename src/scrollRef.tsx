import React, { useRef, useState } from "react";

const ScrollRef = () => {
    const scrollRef = useRef<any>(null)
    const [clientHeight, setClientHeight ] = useState<number>(0)
    const [scrollTop, setScrollTop ] = useState<number>(0)
    const [scrollHeight, setScrollHeight ] = useState<number>(0)
  
    const onScroll = () => {
        if (scrollRef?.current) {
            setClientHeight(scrollRef?.current.clientHeight)
            setScrollTop(scrollRef?.current.scrollTop)
            setScrollHeight(scrollRef?.current.scrollHeight)
      
        }
    }
    return (
        <div>
            <div>
                <p>可视区域高度：{clientHeight}</p>
                <p>滚动条滚动高度：{scrollTop}</p>
                <p>滚动内容高度：{scrollHeight}</p>
            </div>
            <div style={{height:200, overflowY: 'auto'}} ref={scrollRef} onScroll={onScroll}>
                <div style={{height: 2000}}></div>
            </div>
        </div>
    )
}

export default ScrollRef;