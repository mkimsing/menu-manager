"use client";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import muiTheme from "@/theme/theme";
import MenuCard from "./components/MenuCard";
import {
  DaysOfWeek,
  AdminDailyMenu,
  AdminWeeklyMenu,
  AdminMenu,
} from "@/types/types";
import { useAllMeals } from "@/api/hooks/useAllMeals";
import { Button } from "@mui/material";
import { submitMenu } from "@/api/submitMenu";
import DatePicker from "./components/DatePicker";
import { DateRange } from "react-day-picker";
const SIDEBAR_WIDTH = 240; // width in px
const SIDEBAR_BP_KEY = "sm";
const DAYS_OF_WEEK_ARR = Object.keys(DaysOfWeek);

const Page = () => {
  const [menuRange, setMenuRange] = useState<DateRange | undefined>(undefined);
  const onChangeDate = (value: DateRange | undefined) => {
    setMenuRange(value);
  };
  //Fetch meal data
  const { data: allMealsData, isLoading } = useAllMeals();

  //Populate initial selected state
  const generateInitialMenu = () => {
    const initialSelectedState: AdminMenu = {};
    allMealsData?.forEach((menu_option) => {
      if (menu_option) {
        initialSelectedState[menu_option.id] = false;
      }
    });

    const initialEmptyMenu: AdminWeeklyMenu = {} as AdminWeeklyMenu;
    DAYS_OF_WEEK_ARR.forEach((day: string) => {
      initialEmptyMenu[day as keyof AdminWeeklyMenu] = {
        breakfast: initialSelectedState,
        lunch: initialSelectedState,
        dinner: initialSelectedState,
      };
    });

    return initialEmptyMenu;
  };

  const [weeklyMenu, setWeeklyMenu] = useState(generateInitialMenu());
  // Media query
  const matches = useMediaQuery(muiTheme.breakpoints.up(SIDEBAR_BP_KEY));

  const handleSelect = (
    dayKey: string,
    mealKey: string,
    selectedId: string,
    newValue: boolean
  ) => {
    // Set state
    setWeeklyMenu({
      ...weeklyMenu,
      [dayKey]: {
        ...weeklyMenu[dayKey as keyof AdminWeeklyMenu],
        [mealKey as keyof AdminDailyMenu]: {
          ...weeklyMenu[dayKey as keyof AdminWeeklyMenu][
            mealKey as keyof AdminDailyMenu
          ],
          [selectedId]: newValue,
        },
      },
    });
  };

  const handleDelete = () => {};

  const handleSubmit = async () => {
    await submitMenu({
      name: "test",
      active_start_date: new Date().toISOString(),
      weeklyMenu: weeklyMenu,
    });
  };
  return (
    <main
      className="flex min-h-screen flex-col items-center p-8 lg:p-24 "
      style={{
        marginLeft: matches ? SIDEBAR_WIDTH : "inherit", // Allow space for sticky sidebar
      }}
    >
      <h1>Admin</h1>
      <Sidebar width={SIDEBAR_WIDTH} />
      <Box
        sx={{
          flexGrow: 1,
        }}
        className="w-full"
      >
        <DatePicker range={menuRange} onSelect={onChangeDate} />
        {Object.keys(weeklyMenu).map((weeklyMenuKey) => {
          return (
            <MenuCard
              day={weeklyMenuKey}
              key={weeklyMenuKey}
              availableDailyMenu={
                weeklyMenu[weeklyMenuKey as keyof AdminWeeklyMenu]
              }
              handleDelete={handleDelete}
              handleSelect={handleSelect}
              allMealsData={allMealsData}
            />
          );
        })}

        <Button onClick={() => handleSubmit()}>Submit</Button>
      </Box>
    </main>
  );
};

export default Page;
