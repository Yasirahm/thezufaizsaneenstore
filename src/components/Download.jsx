import React from "react";

const DownloadButton = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <a href="/ahhamaam.apk" download>
        <button style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Download  App
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
