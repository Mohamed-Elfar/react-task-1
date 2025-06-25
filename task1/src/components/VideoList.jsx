import React, { useContext } from "react";
import Video from "./Video";
import { VideosContext } from "../context/videos";

const VideoList = () => {
  const { videos } = useContext(VideosContext);

  return (
    <section>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
};

export default VideoList;