import {CasualtyEvent} from "../models/casualty-event.model.ts";
import React from "react";
import './timeline-item.css';

interface Props {
    event: CasualtyEvent;
    direction: 'left' | 'right';
    active: boolean;
    withSeparator: boolean;
    setRef: (node: HTMLDivElement) => void;
}

export const TimelineItem: React.FC<Props> = ({event, direction, active, withSeparator, setRef}: Props) => {
    return (
        <>
            <div
                key={event.report_date}
                className={`timeline-item ${direction} ${active ? 'active' : ''}`}
                ref={setRef}
            >
                <div className="timeline-content">
                    <h2>{event.report_date}</h2>
                    {event.major_event && <h3>{event.major_event}</h3>}
                    <p>Killed: {event.ext_killed ?? 'N/A'}</p>
                    <p>Injured: {event.ext_injured ?? 'N/A'}</p>
                    <p>Total Killed: {event.ext_killed_cum ?? 'N/A'}</p>
                    <p>Total Injured: {event.ext_injured_cum ?? 'N/A'}</p>
                    <p>Children Killed: {event.ext_killed_children_cum ?? 'N/A'}</p>
                    <p>Women Killed: {event.ext_killed_women_cum ?? 'N/A'}</p>
                    <p>Medics Killed: {event.ext_med_killed_cum ?? 'N/A'}</p>
                    <p>Press Killed: {event.ext_press_killed_cum ?? 'N/A'}</p>
                </div>
            </div>
            {withSeparator && <div className="timeline-separator"/>}
        </>
    )
}