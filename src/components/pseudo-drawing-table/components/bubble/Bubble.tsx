import React, { CSSProperties } from "react";
import { RelativePosition } from "../../types";

const Bubble: React.FC<RelativePosition> = (props) => {
  const { top, left } = props;

  const bubbleStyle: CSSProperties = {
    position: "absolute",
    top: top,
    left: left,
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "blue",
  };

  return <span style={bubbleStyle} />;
};

export default Bubble;
