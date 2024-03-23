import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 h-auto rounded-lg shadow-xl hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
  <img
    className="rounded-t-lg w-full"
    src={thumbnails.medium?.url}
    alt="thumbnail"
  />
  <div className="p-3">
    <h2 className="font-bold">{title}</h2>
    <p className="text-gray-600">{channelTitle}</p>
    <p className="text-gray-600">Views: {statistics.viewCount}</p>
  </div>
</div>
  );
};

export default VideoCard;
