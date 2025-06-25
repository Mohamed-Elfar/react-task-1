import React, { useContext } from "react";
import Video from "./Video";
import { VideosContext } from "../context/videos";

const Videos = () => {
  const { videos, setVideos } = useContext(VideosContext);

  return (
    <>
      <button
        onClick={() => {
          setVideos(videos.slice(0, 1));
        }}
      >
        test re-render
      </button>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </>
  );
};

export default Videos;
