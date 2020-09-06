import React, { useState } from 'react';
import { RelativePosition } from '../../types';
import { useMouseRelativePosition } from '../../effects';

import './MousePositionDisplay.css';

interface MousePositionDisplayProps {
    relativeDivRef: React.RefObject<HTMLDivElement>;
}

const MousePositionDisplay: React.FC<MousePositionDisplayProps> = (props) => {
    
    const { relativeDivRef } = props;
    
    const [mousePosition, setMousePosition] = useState<RelativePosition>({left: 0,top: 0,});
    
    const changeMousePositionState = (left: number, top: number) => {
        setMousePosition({left, top});
    }

    useMouseRelativePosition("mousemove", relativeDivRef, changeMousePositionState);

    return (
        <div className="mouse-position-display">
            <div className="top-container">
                <p>{ `TOP: ${mousePosition.top}` }</p>
            </div>
            <div className="left-container">
                <p>{ `LEFT: ${mousePosition.left}` }</p>
            </div>
        </div>
    );
}

export default MousePositionDisplay;