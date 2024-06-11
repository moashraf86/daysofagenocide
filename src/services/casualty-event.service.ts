import axios from "axios";
import {CasualtyEvent} from "../models/casualty-event.model.ts";

class CasualtyEventService {
    async fetchCasualtyEvents() {
        try {
            const response = await axios.get<CasualtyEvent[]>(
                'https://data.techforpalestine.org/api/v2/casualties_daily.json'
            );
            return response.data.reverse();
        } catch (error) {
            console.error('Error fetching the data', error);
            return [];
        }
    }
}

export default new CasualtyEventService();