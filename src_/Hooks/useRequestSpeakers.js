import { data } from '../../speakerData'
import { useState, useEffect } from 'react'
const useRequestSpeakers = (delayTime) => {
    const [speakersData, setSpeakersData] = useState([data]);
    const [loading, setLoading] = useState(true);
    const [error, hasError] = useState();
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    useEffect(async () => {
        try {
            console.log('before update');
            await delay(delayTime);
            setLoading(false);
            setSpeakersData(data);
            // console.log('afterdelay');
            doneUpdating();
        } catch (e) {
            setLoading(false);
            hasError(true);
        }



    })

    const onFavoriteToggle = (doneUpdating) => {
        // let speakersDataNew = [...setSpeakersData];
        // let index = speakersDataNew.findIndex(speaker => speaker.id == id)
        // speakersDateNew[index].favorite = !speakersDateNew[index].favorite;
        // setSpeakersData(speakersDateNew);
        doneUpdating();
        // const speakersRecPrevious = speakersData.find(function (rec) {
        //     return rec.id === id;
        // });
        // const speakerRecUpdated = {
        //     ...speakersRecPrevious,
        //     favorite: !speakersRecPrevious.favorite,
        // };
        // const speakersDataNew = speakersData.map(function (rec) {
        //     return rec.id === id ? speakerRecUpdated : rec;
        // });

        // setSpeakersData(speakersDataNew);
        // doneUpdating();
    }
    return { speakersData, loading, error, delay, onFavoriteToggle }
}
export default useRequestSpeakers;
