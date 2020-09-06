export interface RelativePosition {
  left: number;
  top: number;
}

export interface PositionedBubble {
    id: string;
    where: RelativePosition;
}

export type MouseEventsPermitted = "click" | "mousemove";