import React from 'react';

function ClockLabel() {
    return (
        <div className='clock_label'>{getCurrentDateTimeString()}</div>
    )
}

function getCurrentDateTimeString(): String {
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