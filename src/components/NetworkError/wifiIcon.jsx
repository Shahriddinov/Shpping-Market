import React from "react";

const WifiIcon = () => {
  return (
    <svg
      version="1.1"
      id="wifi"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="150px"
      height="100px"
      viewBox="0 0 20 20">
      <path
        id="wifi3"
        fill="#fff"
        fillOpacity="0.5"
        d="M9.9,5C6.8,5,4,6.4,2.2,8.7l1.1,1.1c1.6-2,4-3.2,6.7-3.2c2.7,0,5.1,1.3,6.7,3.2l1.1-1.1
		C15.8,6.4,13,5,9.9,5z">
        <animate
          id="four"
          attributeName="fill-opacity"
          dur="500ms"
          values="0.5;1;0.5"
          calcMode="linear"
          begin="three.end+0.05s"
        />
      </path>
      <path
        id="wifi2"
        fill="#fff"
        fillOpacity="0.5"
        d="M9.9,8c-2.3,0-4.3,1.1-5.6,2.8l1.1,1.1c1-1.4,2.6-2.4,4.5-2.4c1.9,0,3.5,0.9,4.5,2.4l1.1-1.1
		C14.2,9.1,12.2,8,9.9,8z">
        <animate
          id="three"
          attributeName="fill-opacity"
          dur="500ms"
          values="0.5;1;0.5"
          calcMode="linear"
          begin="two.end+0.05s"
        />
      </path>
      <path
        id="wifi1"
        fill="#fff"
        fillOpacity="0.5"
        d="M9.9,11c-1.5,0-2.7,0.8-3.4,2l1.1,1.1c0.4-0.9,1.3-1.6,2.3-1.6s2,0.7,2.3,1.6l1.1-1.1
		C12.6,11.8,11.4,11,9.9,11z">
        <animate
          id="two"
          attributeName="fill-opacity"
          dur="500ms"
          values="0.5;1;0.5"
          calcMode="linear"
          begin="one.end+0.05s"
        />
      </path>
      <circle id="dot" fill="#fff" fillOpacity="0.5" cx="9.9" cy="15.3" r="1">
        <animate
          id="one"
          attributeName="fill-opacity"
          dur="500ms"
          values="0.5;1;0.5"
          calcMode="linear"
          begin="0s;four.end+0.05s"
        />
      </circle>
    </svg>
  );
};

export default WifiIcon;
