import { useState, useEffect } from "react";

const UseNetwork = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const updateNetwork = () => {
    setIsOnline(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", updateNetwork);
    window.addEventListener("offline", updateNetwork);
    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  });

  return isOnline;
};

export default UseNetwork;
