import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

type Props = {
  tabs: Tab[];
  activeTabValue: Tab["value"];
  onChange: (value: string) => void;
};

type Tab = {
  value: string;
  label: string;
};

export default function ColorTabs({ tabs, activeTabValue, onChange }: Props) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };

  return (
    <Tabs
      value={activeTabValue}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
      variant="fullWidth"
      centered
    >
      {tabs.map((tab) => {
        return <Tab key={tab.value} value={tab.value} label={tab.label} />;
      })}
    </Tabs>
  );
}
