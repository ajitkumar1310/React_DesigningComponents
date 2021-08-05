import { useState } from 'react'
const useSpeakerFilter = (startingShowSessions, startingEventYear) => {
    const [showSessions, setShowSessions] = useState(startingShowSessions);
    const [eventYear, setEventYear] = useState(startingEventYear);
    const [searchQuery, setSearchQyery] = useState("");
    const EVENT_YEARS = [
        "2008", "2009", "2010", "2011", "2022"
    ]
    return { showSessions, setShowSessions, eventYear, setEventYear, searchQuery, setSearchQyery, EVENT_YEARS };
}

export default useSpeakerFilter;

