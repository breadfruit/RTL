import React, {FC} from "react";
import axios, { AxiosRequestConfig } from "axios";
import {act} from '@testing-library/react'

interface RequestOptions extends AxiosRequestConfig {
  // 请求前缀
  url:string
  prefix?: string
  jsonp?: boolean
  callback?: string
}
const TestAxios: FC<RequestOptions> = (props: RequestOptions)=> {
    const [data, setData] = React.useState();
  
    const fetchData = async () => {
      const response = await axios.get(props.url);
      act(() => {
        setData(response.data.greeting);
      });
    };
  
    return (
      <>
        <button onClick={fetchData} data-testid="fetch-data">
          Load Data
        </button>
        {data ? (
          <div data-testid="show-data">{data}</div>
        ) : (
          <h1 data-testid="loading">Loading...</h1>
        )}
      </>
    );
  };
export default TestAxios