import React, { useEffect } from "react";

import { MouseEventsPermitted } from "../types";

const useMouseRelativePosition = (eventType: MouseEventsPermitted, elementRef: React.RefObject<HTMLElement>, callbackFn: (left: number, top: number) => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { offsetX, offsetY } = e;

      callbackFn(offsetX, offsetY);
    };

    const drawingTable = elementRef.current;

    drawingTable!.addEventListener(eventType, handleClick);
    
    return () => drawingTable!.removeEventListener(eventType, handleClick);
  }, [callbackFn, elementRef, eventType]);
};

export { useMouseRelativePosition };