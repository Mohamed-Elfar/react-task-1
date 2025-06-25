import { useContext } from "react";
import VideoList from "./components/VideoList";
import { VideosContext } from "./context/videos";

function App() {
  const { videos, setVideos } = useContext(VideosContext);
  const count = videos.length;
  let heading;
  if (count > 0) {
    const noun = count > 1 ? "Videos" : "Video";
    heading = count + " " + noun;
  }
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "32px",
        background: "#f9f9f9",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        fontFamily: "Segoe UI, Arial, sans-serif"
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2d3748" }}>
        Why, What, and How React!?
      </h1>
      <button
        style={{
          display: "block",
          margin: "24px auto",
          padding: "10px 24px",
          background: "#3182ce",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background 0.2s"
        }}
        onClick={() => {
          setVideos(videos.slice(0, 1));
        }}
      >
        Test re-render
      </button>
      <h2 style={{ textAlign: "center", color: "#4a5568" }}>{heading}</h2>
      <VideoList />
    </div>
  );
}

export default App;