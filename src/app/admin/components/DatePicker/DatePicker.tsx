import React, { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { addDays, format } from "date-fns";
import "react-day-picker/dist/style.css";
type Props = {
  onSelect: (value: DateRange | undefined) => void;
  range: DateRange | undefined;
};

export default function DatePicker({ range, onSelect }: Props) {
  // Helper funciton to force the proper date range
  const handleSelect = (value: DateRange | undefined) => {
    if (value) {
      // If nothing else is selected, force week selection
      if (value.from && !value.to) {
        onSelect({ from: value.from, to: addDays(value.from, 6) });
        return;
      }
    }
    onSelect(value);
  };

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

  return (
    <DayPicker
      mode="range"
      selected={range}
      max={7}
      min={7}
      onSelect={handleSelect}
      footer={footer}
      disabled={(day: Date) => {
        return day.getDay() !== 0; // Only allow sundays
      }}
    />
  );
}
