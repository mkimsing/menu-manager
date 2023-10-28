"use client";

import PkgDateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = [ValuePiece, ValuePiece];

type Props = {
  value: Value;
  onChange: (value: Value) => void;
};

export default function DateRangePicker({ value, onChange }: Props) {
  return (
    <PkgDateRangePicker
      onChange={(value) => onChange(value as Value)}
      value={value}
    />
  );
}
