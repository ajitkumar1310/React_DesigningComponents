import { useContext } from 'react';
import { SpeakerFilterContext } from '../contexts/SpeakerContext';
import Sessions from './Sessions';

const SpeakerImg = ({ id, first, last }) => {
    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                className="contain-fit"
                src={`/images/speaker-${id}.jpg`}
                width="300"
                alt={`${first} ${last}`}
            />
        </div>
    )

}
function SpeakerFavorite({ favorite, onFavoriteToggle }) {
    const doneUpdating = () => {
        console.log('Done Updating');
    }
    return (
        <div className="action padB1">
            <span onClick={() => onFavoriteToggle(doneUpdating)}>
                <i
                    className={
                        favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
                    }
                />{" "}
          Favorite{" "}
            </span>
        </div>
    );
}
const SpeakerDemographics = ({ first, last, bio, company, twitterHandle, favorite, onFavoriteToggle }) => {
    return (
        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {first} {last}
                </h3>
            </div>
            <SpeakerFavorite favorite={favorite} onFavoriteToggle={onFavoriteToggle} />
            <div>
                <p>
                    {bio} {company} {twitterHandle} {favorite}
                </p>
            </div>
        </div>
    )
}
const Speaker = ({ speaker, onFavoriteToggle }) => {
    const { id, first, last, sessions } = speaker;
    const { showSessions } = useContext(SpeakerFilterContext);
    return (
        <div key={id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
                <SpeakerImg id={id} first={first} last={last} />
                <SpeakerDemographics {...speaker} onFavoriteToggle={(id) => onFavoriteToggle(id)} />

            </div>
            {showSessions && <Sessions sessions={sessions} />}

        </div>
    )
}

export default Speaker;