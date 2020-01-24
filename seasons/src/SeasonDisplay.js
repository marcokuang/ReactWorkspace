import React from 'react';

const SeasonDisplay = props => {
    const month = new Date().getMonth();

    return (
        <div>
            Latitude: {props.lat}
            <br />
            Season: {getSeason(props.lat, month)}
            <br />
            <h1>
                {getSeason(props.lat, month) === 'Summer' ? "Let's head to beach!" : "Burrr, it's chilly"}
            </h1>
        </div>
    );
}

function getSeason(lat, month) {
    let season = '';

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