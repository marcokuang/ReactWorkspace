import { combineReducers } from "redux";

//Songs Reducer will return a list of static songs
const songsReducer = () => {
  return [
    {
      title: "Song1",
      duration: "4:05"
    },
    {
      title: "Song2",
      duration: "2:05"
    },
    {
      title: "Song3",
      duration: "3:31"
    },
    {
      title: "Song4",
      duration: "2:55"
    }
  ];
};

//Selected song reducer
//default value of selectedSong is null means when app first starts up it does not have any selected song
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers(
  {
    songs: songsReducer,
    selectedSong: selectedSongReducer
  }
)