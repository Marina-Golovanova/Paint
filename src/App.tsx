import React from "react";
import { DrawContainer } from "./editor/DrawContainer";
import { Tools } from "./editor/Tools";
import { ControlPanel } from "./editor/ControlPanel";

import "./style.scss";

export function App(): JSX.Element {
  const colors = ["#f00", "#ff0", "#f0f", "#0ff", "#0f0", "#00f"];
  const [settedColorIndex, setSettedColorIndex] = React.useState(0);
  const [selectedBrushWidth, setSelectedBrushWidth] = React.useState(5);

  const onSettedColorIndex = (index: number) => {
    setSettedColorIndex(index);
  };

  const onSelectedBrushWidth = (width: number) => {
    setSelectedBrushWidth(width);
  };

  return (
    <div>
      <ControlPanel />
      <Tools
        colors={colors}
        onColorSelect={onSettedColorIndex}
        initialSelectedIndex={settedColorIndex}
        initialBrushWidth={selectedBrushWidth}
        onBrushWidthSelect={onSelectedBrushWidth}
      />
      <DrawContainer
        selectedColor={colors[settedColorIndex]}
        brushWidth={selectedBrushWidth}
      />
    </div>
  );
}
