import { useState } from "react";

type Props = {
  term: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (v: number) => void;
};

export function TermStepper({ term, onChange }: Props) {
  const [display, setDisplay] = useState(String(term));

  return (
    <div className="field-group">
      <label className="field-label" htmlFor="term">Количество платежей</label>
      <div className="field-input-wrap">
        <div className="field-input-row">
          <input
            id="term"
            className="field-input"
            inputMode="numeric"
            type="number"
            value={display}
            onChange={(e) => {
              setDisplay(e.target.value);
              const n = parseInt(e.target.value);
              if (!isNaN(n)) onChange(Math.min(Math.max(n, 1), 120));
            }}
            onBlur={() => {
              if (display === "") return;
              const n = Math.min(Math.max(parseInt(display) || 1, 1), 120);
              onChange(n);
              setDisplay(String(n));
            }}
            placeholder="20"

          />
        </div>
      </div>
    </div>
  );
}
