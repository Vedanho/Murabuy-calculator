type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
};

export function MoneySliderField({ id, label, value, onChange, onBlur }: Props) {
  return (
    <div className="field-group">
      <label className="field-label" htmlFor={id}>{label}</label>
      <div className="field-input-wrap">
        <div className="field-input-row">
          <input
            id={id}
            className="field-input"
            type="text"
            value={value}
            onBlur={onBlur}
            onChange={(e) => {
              const clean = e.target.value.replace(/[^\d]/g, "");
              onChange(clean);
            }}
            onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
            placeholder="100 000 ₽"
          />
        </div>
      </div>
    </div>
  );
}
