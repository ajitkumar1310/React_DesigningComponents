

import SpeakerList from './SpeakerList'
import Header from './Header'
import SpeakersToolbar from './SpeakerToolbar'
import React, { useContext, useState } from "react";
import { ThemeContext } from '../contexts/ThemeContext'
import { SpeakerFilterContext } from '../contexts/SpeakerContext'
import { SpeakerFilterProvider } from '../contexts/SpeakerContext'

const Speakers = () => {
    const { theme, setTheme } = useContext(ThemeContext);


    return (
        <div >
            <SpeakerFilterProvider startingSessions={false} >
                <SpeakersToolbar setTheme={setTheme} theme={theme} />
                <SpeakerList />
            </SpeakerFilterProvider>
        </div>

    )
}
export default Speakers;