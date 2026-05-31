import type { Result } from "../types";
import { PRICE_LIMITS, SETTINGS } from "../constants";
import {  formatNumber, parseMoney } from "../utils";
import { MoneySliderField } from "./MoneySliderField";
import { TermStepper } from "./TermStepper";
import { MarkupSliderField } from "./MarkupSliderField";

type Props = {
  price: string;
  setPrice: (v: string) => void;
  term: number;
  setTerm: (v: number) => void;
  markupPercent: number;
  setMarkupPercent: (v: number) => void;
  downPayment: string;
  setDownPayment: (v: string) => void;
  result: Result;
};

export function InputCard({
  price,
  setPrice,
  term,
  setTerm,
  markupPercent,
  setMarkupPercent,
  downPayment,
  setDownPayment,
  result,
}: Props) {
  function syncMinDown(nextPrice: number) {
    const nextMinDown = Math.ceil((nextPrice * SETTINGS.minDownRate) / SETTINGS.roundStep) * SETTINGS.roundStep;
    setDownPayment(formatNumber(nextMinDown));
  }

  function handlePriceBlur() {
    if (price === "") return;
    const next = Math.max(parseMoney(price), PRICE_LIMITS.min);
    setPrice(formatNumber(next));
    syncMinDown(next);
  }

  function handleDownBlur() {
    if (downPayment === "") return;
    setDownPayment(formatNumber(result.downPayment));
  }

  return (
    <div className="input-card">
      <MoneySliderField
        id="price"
        label="Стоимость товара"
        value={price}
        onChange={(v) => setPrice(v)}
        onBlur={handlePriceBlur}
        
      />

      <div className="field-divider" />

      <TermStepper
        term={term}
        onDecrement={() => setTerm(Math.max(term - 1, 1))}
        onIncrement={() => setTerm(Math.min(term + 1, 120))}
        onChange={(v) => setTerm(v)}
      />

      <div className="field-divider" />

      <MarkupSliderField
        value={markupPercent}
        onChange={setMarkupPercent}
      />

      <div className="field-divider" />

      <MoneySliderField
        id="down"
        label="Первоначальный взнос"
        value={downPayment}
        onChange={(v) => setDownPayment(v)}
        onBlur={handleDownBlur}
      />
    </div>
  );
}
