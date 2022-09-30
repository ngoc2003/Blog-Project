import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Load() {
  return (
    <div class="loading">
      <div class="dash uno"></div>
      <div class="dash dos"></div>
      <div class="dash tres"></div>
      <div class="dash cuatro"></div>
    </div>
  );
}
const Loading = ({ children }) => {
  const [showLoading, setShowLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setShowLoading(true);
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return (
    <>
      {showLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Load />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Loading;
