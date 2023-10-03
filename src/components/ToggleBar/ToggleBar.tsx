import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

type ToggleOption = {
  label: string;
  value: string;
};
type Props = {
  options?: ToggleOption[];
};

const weekdays = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
];

export default function ToggleBar({ options = weekdays }: Props) {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newOption: string
  ) => {
    if (newOption !== null) {
      setSelected(
        options.find((option) => option.value === newOption) || options[0]
      );
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={selected.value}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {options.map((option) => {
        return (
          <ToggleButton key={option.value} value={option.value}>
            {option.label}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
