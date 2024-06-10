import {useEffect} from "react";
import {debounce} from "../utils/debounce.ts";

export const useSetActiveIndex = (refs: HTMLDivElement[], setActiveIndex: React.Dispatch<number>) => {
    useEffect(() => {
        const handleScroll = () => {
            let index = refs.findIndex((item) => {
                const rect = item.getBoundingClientRect();
                return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
            });
            setActiveIndex(index);
        };

        const handleWithDebounce = debounce(handleScroll, 50);

        window.addEventListener('scroll', handleWithDebounce);
        return () => window.removeEventListener('scroll', handleWithDebounce);
    }, [refs, setActiveIndex]);
}