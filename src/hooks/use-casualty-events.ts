import {CasualtyEvent} from "../models/casualty-event.model.ts";
import {useEffect} from "react";
import CasualtyEventService from "../services/casualty-event.service.ts";

export const useCasualtyEvents = (setEvents: React.Dispatch<CasualtyEvent[]>) => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await CasualtyEventService.fetchCasualtyEvents();
            setEvents(response);
        };

        fetchData();
    }, [setEvents]);
}