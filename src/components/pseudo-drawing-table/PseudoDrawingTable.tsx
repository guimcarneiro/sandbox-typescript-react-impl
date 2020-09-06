import React, { useState, useRef } from "react";
import { PositionedBubble } from "./types";

import "./PseudoDrawingTable.css";

import Bubble from "./components/bubble/Bubble";
import { generateId } from "../../utils";
import MousePositionDisplay from "./components/mouse-position-display/MousePositionDisplay";
import { useMouseRelativePosition } from "./effects";

const PseudoDrawingTable: React.FC = () => {
  const drawingTableRef = useRef<HTMLDivElement>(null);

  const [bubblesList, setBubblesList] = useState<PositionedBubble[]>([]);

  const addBubble = (left: number, top: number) => {
    let newPositionedBubble = {
      id: generateId(),
      where: { left, top },
    };

    setBubblesList((prevBubbles) => [...prevBubbles, newPositionedBubble]);
  };

  useMouseRelativePosition("click", drawingTableRef, addBubble);

  const renderBubbles = () => {
    return bubblesList.map((bubble) => (
      <Bubble key={bubble.id} {...bubble.where} />
    ));
  };

  return (
    <div className="drawing-table" ref={drawingTableRef}>
      <MousePositionDisplay relativeDivRef={drawingTableRef} />
      {renderBubbles()}
    </div>
  );
};

export default PseudoDrawingTable;
