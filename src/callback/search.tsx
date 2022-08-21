import { ReactNode } from "react";

interface SearchProps  {
  children: ReactNode
  value: string
  onChange: Function
}
function Search(props: SearchProps) {
    return (
      <div>
        <label htmlFor="search">{props.children}</label>
        <input
          id="search"
          type="text"
          value={props.value}
          onChange={() => props.onChange()}
        />
      </div>
    );
  }
  
  export default Search