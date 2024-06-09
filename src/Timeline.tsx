import React, {useState} from 'react';
import './Timeline.css';
import {CasualtyEvent} from "./models/casualty-event.model.ts";
import {TimelineItem} from "./components/timeline-item.tsx";
import {useCasualtyEvents} from "./hooks/use-casualty-events.ts";
import {useSetActiveIndex} from "./hooks/use-set-active-index.ts";

const Timeline: React.FC = () => {
    const [events, setEvents] = useState<CasualtyEvent[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    useCasualtyEvents(setEvents);
    useSetActiveIndex(events, setActiveIndex);

    return (
        <div className="timeline">
            {events.map((event, index) => (
                <TimelineItem key={event.report_date} event={event} direction={index % 2 === 0 ? 'left' : 'right'}
                              active={activeIndex === index} withSeparator={index !== events.length - 1}/>
            ))}
        </div>
    );
};

export default Timeline;
