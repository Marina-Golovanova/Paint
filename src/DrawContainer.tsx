import React from "react";

interface DrawContainerProps {
  selectedColor: string;
  brushWidth: number;
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
    }
  }, [props.selectedColor, props.brushWidth]);

  return (
    <div>
      <canvas ref={canvas} width="640" height="180"></canvas>
    </div>
  );
}
