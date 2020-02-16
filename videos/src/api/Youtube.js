import Keys from "./Keys";
import axios from "axios";

const baseURL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL: baseURL,
  params: {
    part: "snippet",
    maxResults: 11,
    key: Keys.YOUTUBE_API_KEY,
    type: "video"
  }
});
