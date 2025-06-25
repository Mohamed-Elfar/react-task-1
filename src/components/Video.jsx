import React from "react";

const Video = ({ video }) => {
  return (
    <div
      style={{
        background: "#fefefe",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        margin: "32px 0",
        padding: "24px",
        display: "flex",
        gap: "24px",
        alignItems: "flex-start",
        transition: "transform 0.3s ease",
        border: "1px solid #e2e8f0"
      }}
    >
      <iframe
        width="320"
        height="180"
        src={video.link}
        title={video.title}
        frameBorder="0"
        allowFullScreen
        style={{
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        }}
      ></iframe>
      <div style={{ flex: 1 }}>
        <h3
          style={{
            margin: "0 0 16px 0",
            color: "#1a202c",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          {video.title}
        </h3>
        <h4
          style={{
            margin: "0 0 12px 0",
            color: "#4a5568",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Comments:
        </h4>
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          {video.comments && video.comments.length > 0 ? (
            video.comments.map((comment, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: "8px",
                  color: "#2d3748",
                  lineHeight: "1.4",
                }}
              >
                {comment}
              </li>
            ))
          ) : (
            <li style={{ color: "#a0aec0" }}>No comments yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Video;
