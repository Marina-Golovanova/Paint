import React from "react";
import { DrawContainer } from "../draw-container/DrawContainer";
import { Tools } from "../tools/Tools";

import "./app.scss";

export function App(): JSX.Element {
  const colors = ["#f00", "#ff0", "#f0f", "#0ff", "#0f0", "#00f"];
  const [settedColor, setSettedColor] = React.useState("#000");
  const [selectedBrushWidth, setSelectedBrushWidth] = React.useState(5);
  const [needClear, setNeedClear] = React.useState(false);

  const onSettedColor = (color: string) => {
    setSettedColor(color);
  };

  const onSelectedBrushWidth = (width: number) => {
    setSelectedBrushWidth(width);
  };

  const onClear = () => {
    setNeedClear(true);
    setTimeout(() => {
      setNeedClear(false);
    }, 1000);
  };

  return (
    <div>
      <Tools
        colors={colors}
        onColorSelect={onSettedColor}
        initialSelectedColor={settedColor}
        initialBrushWidth={selectedBrushWidth}
        onBrushWidthSelect={onSelectedBrushWidth}
        onClear={onClear}
      />
      <DrawContainer
        selectedColor={settedColor}
        brushWidth={selectedBrushWidth}
        isNeedClear={needClear}
      />
    </div>
  );
}
