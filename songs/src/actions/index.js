// Action creator

//named export: allows to export many different functions from a single file
// to use named export: import { selectSong} from './actions'
export const selectSong = song => {
  //return an action object
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};