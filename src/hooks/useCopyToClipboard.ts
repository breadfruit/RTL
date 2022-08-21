import useMountedState from './useMountedState'
export interface CopyToClipboardState {
    value?: string,
    noUserInteraction: boolean;
    error?: Error;
}

