const GOOGLE_API_KEY="AIzaSyCZShpoiy_FaVvwi3W5wJw4o6t0Q7OKWjQ";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

 export const OFFSET_LIVE_CHAT=10;
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="