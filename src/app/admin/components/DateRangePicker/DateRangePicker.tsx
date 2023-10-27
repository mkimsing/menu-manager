"use client";
import { useState } from "react";
import PkgDateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DateRangePicker() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <PkgDateRangePicker onChange={onChange} value={value} />
    </div>
  );
}
