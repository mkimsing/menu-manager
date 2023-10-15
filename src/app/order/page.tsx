"use client";
import MealCard from "@/components/MealCard";
import ToggleBar from "@/components/ToggleBar";
import Tabs from "@/components/TabBar";
import React, { useState } from "react";
import TabBar from "@/components/TabBar";
import OrderTabs from "./components/OrderTabs";

import { WeeklyMealData } from "@/api/data";
import Tab from "./components/Tab";
import { WeeklyMealChoices } from "@/api/types";

type Weekday = {
  label: string;
  value: string;
};
const weekdays: Weekday[] = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState(weekdays[0]);

  const onChangeTab = (newValue: string) => {
    setActiveTab(
      weekdays.find((weekday) => weekday.value === newValue) || weekdays[0]
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Order</h1>
      <TabBar
        tabs={weekdays}
        activeTabValue={activeTab.value}
        onChange={onChangeTab}
      />
      <OrderTabs
        activeTabIndex={weekdays.findIndex(
          (weekday) => weekday.value === activeTab.value
        )}
      >
        {Object.keys(WeeklyMealData).map((key, index) => {
          return (
            <Tab
              key={key + index}
              index={index}
              activeIndex={weekdays.findIndex(
                (weekday) => weekday.value === activeTab.value
              )}
              dailyChoices={WeeklyMealData[key as keyof WeeklyMealChoices]}
            />
          );
        })}
      </OrderTabs>
    </main>
  );
};
export default Page;
