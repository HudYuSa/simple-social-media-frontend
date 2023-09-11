// LoadingBar.js
import React from "react";

function LoadingBar({ loading }) {
  return (
    <div className={`h-2 w-full ${loading ? "bg-blue-500" : "bg-gray-300"}`}>
      {loading && (
        <div className="h-full animate-pulse" style={{ width: "50%" }}></div>
      )}
    </div>
  );
}

export default LoadingBar;
