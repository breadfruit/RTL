import { useState } from "react";

export interface LocationSensorState {
    trigger: string;
    state?: any;
    length?: number;
    hash?: string;
    host?: string;
    hostname?: string;
    href?: string;
    origin?: string;
    pathname?: string;
    port?: string;
    protocol?: string;
    search?: string;
  }
const buildState = (trigger: string) => {
    const { state, length } = window.history;

    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = window.location;
    
    return {
        trigger,
        state,
        length,
        hash,
        host,
        hostname,
        href,
        origin,
        pathname,
        port,
        protocol,
        search,
      };
}

const useLocationBrowser = (): LocationSensorState => {
    const [state, setState] = useState(buildState("load"))
    return state
}   

