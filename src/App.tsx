import React from "react";
import { DrawContainer } from "./DrawContainer";

import "./style.scss";

export function App(): JSX.Element {
  const colors = ["#f00", "#ff0", "f0f", "#0ff", "#0f0", "#00f"];
  const [settedColorIndex, setSettedColorIndex] = React.useState(0);
  const [selectedBrushWidth, setSelectedBrushWidth] = React.useState(5);
  return (
    <div>
      <ControlPanel />
      <Tools
        colors={colors}
        onColorSelect={(index) => setSettedColorIndex(index)}
        initialSelectedIndex={settedColorIndex}
        initialBrushWidth={selectedBrushWidth}
        onBrushWidthSelect={(width) => setSelectedBrushWidth(width)}
      />
      <DrawContainer
        selectedColor={colors[settedColorIndex]}
        brushWidth={selectedBrushWidth}
      />
    </div>
  );
}

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

export function ControlPanel(): JSX.Element {
  return (
    <div className="controlPanel-wrapper">
      <input type="file" />
    </div>
  );
}
