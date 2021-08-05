
import { useState, useEffect } from "react"
import { data } from '../../speakerData'
export const useRequestSpeakers = (delayms) => {
    const [speakers, setSpeakers] = useState([])
    const [showSessions, setShowSessions] = useState(true)
    const delay = (delayms) => new Promise((resolve) => setTimeout(resolve, delayms))
    useEffect(async () => {
        await delay(2000);
        setSpeakers(data)
    }, [])

    return { speakers, showSessions, setShowSessions }
}
