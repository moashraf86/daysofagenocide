import {useEffect} from "react";
import {debounce} from "../utils/debounce.ts";

export const useSetActiveIndex = (events: unknown[], setActiveIndex: React.Dispatch<number>) => {
    useEffect(() => {
        const items = document.querySelectorAll('.timeline-item');
        const handleScroll = () => {
            let index = 0;
            items.forEach((item, i) => {
                const rect = item.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    index = i;
                }
            });
            setActiveIndex(index);
        };

        const handleWithDebounce = debounce(handleScroll, 50);

        window.addEventListener('scroll', handleWithDebounce);
        return () => window.removeEventListener('scroll', handleWithDebounce);
    }, [events, setActiveIndex]);
}