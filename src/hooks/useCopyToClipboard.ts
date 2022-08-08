import useMountedState from './useMountedState'
export interface CopyToClipboardState {
    value?: string,
    noUserInteraction: boolean;
    error?: Error;
}

const useCopyToClipboard = (): [CopyToClipboardState, (value: string) => void] => {
    const isMounted = useMountedState()
   
}