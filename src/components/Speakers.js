import { EnhancedSpeaker } from "./SpeakersList"
import { Header } from './Header'
import { Toolbar } from './ToolBar'
import { useRequestSpeakers } from '../Hooks/useRequestSpeaker'
import { ThemeProvider } from '../contexts/ThemeContext'

export const Speakers = () => {
    const { speakers, showSessions, setShowSessions } = useRequestSpeakers(2000)
    return (
        <>
            <ThemeProvider initialTheme='black'>
                <Header />
                <Toolbar showSessions={showSessions} setShowSessions={setShowSessions} />
                <EnhancedSpeaker speakers={speakers} />
            </ThemeProvider>
        </>
    )
}

