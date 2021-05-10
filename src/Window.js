import React from "react";

export default function Window(props) {
  return (
    <div
      className='app-frame'>
      <div
        className='app-frame-header'
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row"
        }}>
        <div
          style={{
            borderRadius: 1000,
            background: "rgba(256, 256, 256, 0.3)",
            width: 12,
            height: 12,
            marginRight: 8
          }}></div>
        <div
          style={{
            borderRadius: 1000,
            background: "rgba(256, 256, 256, 0.3)",
            width: 12,
            height: 12,
            marginRight: 8
          }}></div>
        <div
          style={{
            borderRadius: 1000,
            background: "rgba(256, 256, 256, 0.3)",
            width: 12,
            height: 12
          }}></div>
      </div>
      {props.children}
    </div>
  );
}
