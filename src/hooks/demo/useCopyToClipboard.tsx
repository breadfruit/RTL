import { useCopyToClipboard } from 'react-use'
import React  from 'react';
const Demo1 = () => {
    const [text, setText] = React.useState('');
    const [state, copyToClipboard] = useCopyToClipboard();
  
    return (
      <div>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button type="button" onClick={() => copyToClipboard(text)}>copy text</button>
        {state.error
          ? <p>Unable to copy value: {state.error.message}</p>
          : state.value && <p>Copied {state.value}</p>}
      </div>
    )

}
export default Demo1;