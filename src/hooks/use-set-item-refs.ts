import {useEffect} from "react";

export const useSetItemRefs = (refs: React.MutableRefObject<HTMLDivElement[]>, events: unknown[]) => {
    useEffect(() => {
        refs.current = refs.current.slice(0, events.length);
    }, [events]);
}