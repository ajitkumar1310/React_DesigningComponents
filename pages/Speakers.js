// const WithData = (maxSpeakers) =>
//     (Component) => {
//         const speakers = [{ id: 1 }, { id: 2 }, { id: 3 }].slice(0, maxSpeakers);
//         return () =>
//             <div><Component speakers={speakers}></Component></div>

//     }


const Speakers = () => {
    const speakers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    return (
        <SpeakerRenderer >{() =>
            <div>
                {speakers.map(speaker => <div>{speaker.id}</div>)}
            </div>
        }
        </SpeakerRenderer>
    )
}
const SpeakerRenderer = ({ children }) => {
    return children()

}
// const EnhancedSpeaker = WithData(2)(Speakers);
export default Speakers