import React from "react";

import "./draw-container.scss";

interface DrawContainerProps {
  selectedColor: string;
  brushWidth: number;
  isNeedClear: boolean;
}

export function DrawContainer(props: DrawContainerProps): JSX.Element {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const context = canvas.current?.getContext("2d");
    if (canvas.current && context) {
      context.fillStyle = props.selectedColor;
      context.strokeStyle = props.selectedColor;
      context.lineWidth = props.brushWidth;

      canvas.current.onmousemove = (ev) => {
        if (ev.buttons === 1) {
          context.lineTo(ev.offsetX, ev.offsetY);
          context.stroke();
        }
      };

      canvas.current.onmousedown = (ev) => {
        if (ev.buttons === 1) {
          context.beginPath();
        }
      };

      canvas.current.onmouseup = (ev) => {
        if (ev.buttons === 1) {
          context.closePath();
        }
      };
      if (props.isNeedClear) {
        context.clearRect(0, 0, 700, 500);
      }
    }
  }, [props.selectedColor, props.brushWidth, props.isNeedClear]);

  return (
    <div>
      <canvas className="canvas" ref={canvas} width="700" height="500"></canvas>
    </div>
  );
}
