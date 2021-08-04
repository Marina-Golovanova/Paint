import React from "react";

import "./tools.scss";

interface IToolsProps {
  colors: string[];
  onColorSelect: (color: string) => void;
  initialSelectedColor: string;
  onBrushWidthSelect: (width: number) => void;
  initialBrushWidth: number;
  onClear: () => void;
}

export function Tools(props: IToolsProps): JSX.Element {
  return (
    <div className="tools-wrapper">
      <div className="tools-wrapper__item">
        Цвет:
        <input
          type="color"
          onChange={(ev) => props.onColorSelect(ev.target.value)}
        />
      </div>
      <div className="tools-wrapper__item">
        Кисть:
        <input
          value={props.initialBrushWidth}
          type="range"
          onChange={(ev) => props.onBrushWidthSelect(ev.target.valueAsNumber)}
          className="tools-input"
        />
      </div>
      <div className="tools-wrapper__item">
        <button className="tools-wrapper__button" onClick={props.onClear}>
          Очистить
        </button>
      </div>
    </div>
  );
}
