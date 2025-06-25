import { createContext, useEffect, useState } from "react";

function fetchVideos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Travel Vlog: Japan",
          link: "https://youtu.be/FFYNIiN2JY4?si=jygpYdTAWfpKP33_",
          comments: ["Amazing scenery!", "I want to visit Japan someday."]
        },
        {
          id: 2,
          title: "React.js Crash Course",
          link: "https://youtu.be/fJSFus0pxZI",
          comments: ["Very helpful tutorial.", "Thanks for the clear explanation!"]
        },
        {
          id: 3,
          title: "Cooking Masterclass: Pasta",
          comments: ["Delicious recipe!", "Definitely trying this tonight."]
        }
      ]);
    }, 1000);
  });
}

export const VideosContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos().then((data) => {
      setVideos(data);
      setLoading(false);
    });
  }, []);

  return (
    <VideosContext.Provider value={{ videos, setVideos, loading }}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideoProvider;
