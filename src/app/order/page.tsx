"use client";
import MealCard from "@/components/MealCard";
import ToggleBar from "@/components/ToggleBar";
import Tabs from "@/components/TabBar";
import React, { useState } from "react";
import TabBar from "@/components/TabBar";
import OrderTabs from "./components/OrderTabs";
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

type MealOption = {
  any;
  // imageURL: string;
  // name: string;
  // description: string;
};

type DailyChoices = {
  breakfast: MealOption[];
  lunch: MealOption[];
  dinner: MealOption[];
};

enum DayOfWeek {
  Sunday = "Sun",
  Monday = "Mon",
  Tuesday = "Tues",
  Wednesday = "Wed",
  Thursday = "Thurs",
  Friday = "Fri",
  Saturday = "Sat",
}
type WeeklyMeals = {
  [key in DayOfWeek]: DailyChoices;
};

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
      <OrderTabs MealData={} />
      <MealCard />
    </main>
  );
};
export default Page;
