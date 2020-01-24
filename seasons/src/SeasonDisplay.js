import React from "react";

const SeasonConfig = {
  Summer: {
    text: "Let's head to beach!",
    iconName: "sun",
    seasonText: "Summer"
  },
  Winter: {
    text: "Burrr, it's chilly",
    iconName: "snowflake",
    seasonText: "Winter"
  }
};

const SeasonDisplay = props => {
  const month = new Date().getMonth();
  const season = getSeason(props.lat, month);
  const icon =
    season === SeasonConfig.Summer.seasonText
      ? SeasonConfig.Summer.iconName
      : SeasonConfig.Winter.iconName;

  return (
    <div className="season-display">
      <div>
        <p>Latitude: {props.lat}</p>
      </div>
      <div>
        <p>Season: {season}</p>
      </div>
      <i className={`${icon} massive icon blue icon-left`}></i>
      <h1>
        {season === SeasonConfig.Summer.seasonText
          ? SeasonConfig.Summer.text
          : SeasonConfig.Winter.text}
      </h1>
      <i className={`${icon} massive icon blue icon-right`}></i>
    </div>
  );
};

function getSeason(lat, month) {
  let season = "";

  if ((month < 3 && month >= 0) || (month >= 9 && month <= 11)) {
    // season is winter
    season = SeasonConfig.Winter.seasonText;
  } else {
    // season is summer
    season = SeasonConfig.Summer.seasonText;
  }

  if (lat >= 0) {
    return season;
  } else {
    return season === SeasonConfig.Winter.seasonText
      ? SeasonConfig.Summer.seasonText
      : SeasonConfig.Winter.seasonText;
  }
}

export default SeasonDisplay;
