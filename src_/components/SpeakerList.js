import Speaker from './Speaker'

import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import useRequestSpeakers from '../Hooks/useRequestSpeakers'
const SpeakerList = ({ showSessions }) => {
    const { speakersData, loading, error, delay, onFavoriteToggle } = useRequestSpeakers(2000);
    return (

        <div className="container speakers-list">
            <ReactPlaceholder type='media' rows={7} ready={loading != true}>
                <div className="row">
                    {speakersData.map(function (speaker) {
                        return (
                            <Speaker key={speaker.id}
                                speaker={speaker}
                                showSessions={showSessions}
                                onFavoriteToggle={(doneUpdating) => onFavoriteToggle(doneUpdating)} />
                        );
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    )
}
export default SpeakerList