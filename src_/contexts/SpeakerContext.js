import { createContext } from 'react';
import useSpeakerFilter from '../Hooks/useSpeakerFilter';

export const SpeakerFilterContext = createContext();

const SpeakerFilterProvider = ({ children, startingSessions = false, startingEventYear }) => {
    const { showSessions, setShowSessions, eventYear, setEventYear, searchQuery, setSearchQyery, EVENT_YEARS } = useSpeakerFilter(startingSessions);
    return (
        <SpeakerFilterContext.Provider value={{ showSessions, setShowSessions, eventYear, setEventYear, searchQuery, setSearchQyery, EVENT_YEARS }}>
            {children}
        </SpeakerFilterContext.Provider>
    )
}

export { SpeakerFilterProvider }