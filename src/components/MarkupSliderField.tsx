import { useState } from "react";
import { MARKUP_LIMITS } from "../constants";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export function MarkupSliderField({ value, onChange }: Props) {
  const [display, setDisplay] = useState(String(value));

  return (
    <div className="field-group">
      <label className="field-label" htmlFor="custom-markup">Наценка</label>
      <div className="field-input-wrap">
        <div className="field-input-row">
          <input
            id="custom-markup"
            className="field-input"
            inputMode="decimal"
            type="number"
            value={display}
            onChange={(e) => {
              setDisplay(e.target.value);
              const n = parseFloat(e.target.value);
              if (!isNaN(n)) onChange(n);
            }}
            onBlur={() => {
              if (display === "") return;
              const n = Math.max(parseFloat(display) || MARKUP_LIMITS.min, MARKUP_LIMITS.min);
              onChange(n);
              setDisplay(String(n));
            }}
            placeholder="20%"
          />
          
        </div>
      </div>
    </div>
  );
}
