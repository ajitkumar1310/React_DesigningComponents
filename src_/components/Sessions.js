import { SpeakerFilterContext } from "../contexts/SpeakerContext"
import { useContext } from 'react'

const Session = ({ title, name }) => {
    return (
        <span className="session w-100">
            {title}{" "}
            <strong>Room: {name}</strong>
        </span>
    )
}
const Sessions = ({ sessions }) => {
    const { eventYear, EVENT_YEARS } = useContext(SpeakerFilterContext)
    console.log(eventYear)
    return (
        <div>
            {sessions.filter(session => session.eventYear === eventYear)
                .map(session => <Session titile={session.title} name={session.room.name} />)}
        </div>

    )
}
export default Sessions;