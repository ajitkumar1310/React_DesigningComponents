import SpeakerList from "../../src_/components/SpeakerList"
import { withData } from "./withData"

const SpeakersList = ({ speakersData }) => {
    return (
        <>
            {speakersData.map(speaker => {
                return (
                    <div key={speaker.id}>
                        <Speaker  {...speaker} />
                    </div>
                )
            })}
        </>
    )
}


const Speaker = ({ id, first }) => {
    return (
        <div>
            <img src={`images/speaker-${id}.jpg`} />
            {first}
        </div>
    )
}
const EnhancedSpeaker = withData(2)(SpeakersList);
export { EnhancedSpeaker }