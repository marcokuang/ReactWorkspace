import React from 'react';

const SeasonDisplay = props => {
    return (
        <div>
            Latitude: {props.lat}
            <br />
            Season: {getSeason(4, props.lat)}
        </div>
    );
}

function getSeason(month, lat) {
    let season = '';

    const date = new Date();
    month = date.getMonth().toLocaleString();

    if ((month < 3 && month >= 0) || (month >= 9 && month <= 11)) {
        // season is winter
        season = 'Winter';
    }
    else {
        // season is summer
        season = 'Summer';
    }

    if (lat >= 0) {
        return season;
    }
    else {
        return season === 'Winter' ? 'Summer' : 'Winter';
    }
}

export default SeasonDisplay;