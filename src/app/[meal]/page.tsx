"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Button,
} from "@mui/material";

import MealChoiceCard from "@/components/MealChoiceCard";
import MealDetailsModal from "@/components/MealDetailsModal";

import { WeeklyMealData } from "@/api/data";
import {
  DailyMealChoices,
  MealChoice,
  MealsInDay,
  WeeklyMealChoices,
} from "@/api/types";

const IconMealMapping: { [key in MealsInDay]: JSX.Element } = {
  breakfast: (
    <BrunchDiningIcon className="mr-4" color="primary" sx={{ fontSize: 42 }} />
  ),
  lunch: (
    <LunchDiningIcon className="mr-4" color="primary" sx={{ fontSize: 42 }} />
  ),
  dinner: (
    <DinnerDiningIcon className="mr-4" color="primary" sx={{ fontSize: 42 }} />
  ),
};

const Page = () => {
  const searchParams = useSearchParams();
  const dayOfWeek = searchParams.get("dayOfWeek");
  const dailyMealData = WeeklyMealData[dayOfWeek as keyof WeeklyMealChoices];

  //Inital fetch
  const initialMeals: {
    [key in keyof DailyMealChoices]: MealChoice | undefined;
  } = {
    breakfast: undefined,
    lunch: undefined,
    dinner: undefined,
  };
  Object.keys(dailyMealData).forEach(
    (key) =>
      (initialMeals[key as keyof DailyMealChoices] =
        dailyMealData[key as keyof DailyMealChoices][0])
  );

  console.log(initialMeals);
  //Handle selected state
  const [selectedMeals, setSelectedMeals] = useState(initialMeals);

  //Handle state for modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    handleOpen();
  };

  const onHandleSelect = (meal: MealChoice, mealKey: keyof MealsInDay) => {
    setSelectedMeals({
      ...selectedMeals,
      [mealKey]: meal,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-screen h-[30vh]">
        <Image src="https://picsum.photos/id/196/200/300" alt="Hero" fill />
        <div className="relative flex flex-col justify-center items-center h-full">
          <Typography color="white" variant="h3">
            {dayOfWeek}
          </Typography>
        </div>
      </div>
      <div className="mx-8">
        {Object.keys(dailyMealData).map((key) => {
          const mealName = key[0].toUpperCase() + key.slice(1);
          return (
            <Box key={key} className="mt-4">
              <Accordion className="rounded-xl border-solid border-2 border-indigo-600">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="flex items-center"
                >
                  {IconMealMapping[key as keyof DailyMealChoices]}
                  <Typography className="mt-1" variant="h5">
                    {mealName}
                  </Typography>
                  <Typography className="mt-1 ml-10" variant="h5">
                    {selectedMeals[key as keyof DailyMealChoices]?.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {dailyMealData[key as keyof DailyMealChoices].map((meal) => {
                    const isSelected =
                      selectedMeals[key as keyof DailyMealChoices]?.id ===
                      meal.id;
                    return (
                      <MealChoiceCard
                        key={key + meal.id}
                        mealKey={key as keyof MealsInDay}
                        handleOnSelect={onHandleSelect}
                        selected={isSelected}
                        handleOnClick={handleOnClick}
                        meal={meal}
                      />
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </Box>
          );
        })}
        <Button>Submit</Button>
      </div>
      <MealDetailsModal isOpen={open} handleClose={handleClose} />
    </main>
  );
};
export default Page;
