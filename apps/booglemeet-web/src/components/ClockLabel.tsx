"use client";

import React, { useState, useEffect } from 'react';

function ClockLabel() {
    const [currentTime, setCurrentTime] = useState(getCurrentDateTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentDateTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
    })

    return (
        <div className='clock_label'>{getCurrentDateTimeString()}</div>
    )
}


function getCurrentDateTimeString(): String {
    setInterval(() => { }, 1000);
    let datetime = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    };
    let timeStr = `${datetime.getHours()}:${datetime.getMinutes()}`;
    let dateStr = datetime.toLocaleDateString('en-US', options);
    let result = timeStr + ' • ' + dateStr;
    return result;
}

export default ClockLabel;