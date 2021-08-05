import React, { useState, useContext } from "react";
import useSpeakerFilter from "../Hooks/useSpeakerFilter";
import { SpeakerFilterContext } from '../contexts/SpeakerContext'
import { ThemeContext } from '../contexts/ThemeContext'


const SpeakersToolbar = () => {

    const { theme, setTheme } = useContext(ThemeContext);
    const { showSessions, setShowSessions, eventYear, setEventYear, searchQuery, setSearchQyery, EVENT_YEARS } = useContext(SpeakerFilterContext)
    return (
        <section className="toolbar dark-theme-header">
            <div className="container">
                <div className="justify-content-between">
                    <ul className="toolrow d-flex flex-column flex-lg-row">
                        <li className="d-flex flex-column flex-md-row">
                            <b>Show Sessions&nbsp;&nbsp;</b>
                            <label className="fav">
                                <input type="checkbox" checked={showSessions} onChange={() => setShowSessions(!showSessions)} />
                                <span className="switch"></span>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
                            <strong>Theme</strong>
                            <label classname="dropdown">
                                <select className="form-control theme" value={theme} onChange={event => setTheme(event.target.value)}>
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <strong>SearchQuery</strong>
                            <input type="text" onChange={(event) => setSearchQyery(event.target.value)} />
                        </li>
                        <li>
                            <strong>Year</strong>
                            <select onChange={(event) => setEventYear(event.target.value)}>
                                {EVENT_YEARS.map(yearNo => <option value={eventYear} >{yearNo}</option>)}
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SpeakersToolbar;
