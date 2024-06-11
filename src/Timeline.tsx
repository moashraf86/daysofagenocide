import React, { useRef, useState } from "react";
import "./Timeline.css";
import { CasualtyEvent } from "./models/casualty-event.model.ts";
import { TimelineItem } from "./components/timeline-item.tsx";
import { useCasualtyEvents } from "./hooks/use-casualty-events.ts";
import { useSetActiveIndex } from "./hooks/use-set-active-index.ts";
import { useSetItemRefs } from "./hooks/use-set-item-refs.ts";

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<CasualtyEvent[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const refs = useRef([] as HTMLDivElement[]);

  useSetItemRefs(refs, events);
  useCasualtyEvents(setEvents);
  useSetActiveIndex(refs.current, setActiveIndex);

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineItem
          key={event.report_date}
          event={event}
          direction={index % 2 === 0 ? "left" : "right"}
          setRef={(node) => (refs.current[index] = node)}
          active={activeIndex === index}
          withSeparator={index !== events.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;
