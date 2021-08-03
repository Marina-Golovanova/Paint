import React from "react";

interface IToolsProps {
  colors: string[];
  onColorSelect: (index: number) => void;
  initialSelectedIndex: number;
  onBrushWidthSelect: (width: number) => void;
  initialBrushWidth: number;
}

export function Tools(props: IToolsProps): JSX.Element {
  const colorButtons = props.colors.map((color, index) => (
    <button
      className={`colorButton ${
        index === props.initialSelectedIndex ? "colorButton--selected" : ""
      }`}
      style={{ backgroundColor: color }}
      onClick={() => {
        props.onColorSelect(index);
      }}
      key={color}
    ></button>
  ));

  return (
    <div className="tools-wrapper">
      <div>
        Цвет:
        {colorButtons}
      </div>
      <div>
        Кисть:
        <input
          value={props.initialBrushWidth}
          type="range"
          onChange={(ev) => props.onBrushWidthSelect(ev.target.valueAsNumber)}
        />
      </div>
    </div>
  );
}
