// src/Timeline.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Timeline.css';

interface Event {
  report_date: string;
  ext_killed?: number;
  ext_injured?: number;
  ext_killed_cum?: number;
  ext_injured_cum?: number;
  ext_killed_children_cum?: number;
  ext_killed_women_cum?: number;
  ext_civdef_killed_cum?: number;
  ext_med_killed_cum?: number;
  ext_press_killed_cum?: number;
}

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Event[]>(
          'https://data.techforpalestine.org/api/v2/casualties_daily.json'
        );
        setEvents(response.data.reverse()); // Reverse the data here
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();

    const handleScroll = () => {
      const items = document.querySelectorAll('.timeline-item');
      let index = 0;
      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          index = i;
        }
      });
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div
          key={event.report_date}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${index === activeIndex ? 'active' : ''}`}
        >
          <div className="timeline-content">
            <h2>{event.report_date}</h2>
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
      ))}
    </div>
  );
};

export default Timeline;
