"use client";
import React, { useEffect, useState } from "react";

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
} from "@mui/material";

import MealChoiceCard from "@/components/MealChoiceCard";

import {
  MealsInDay,
  SelectedDailyMealChoices,
  Menu_Option,
  AvailableDailyMenu,
} from "@/types/types";

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

type Props = {
  dailyMealData: AvailableDailyMenu;
  selected: SelectedDailyMealChoices;
  onSelect: (meal: Menu_Option, mealKey: keyof MealsInDay) => void;
};

const MealSelectionForm = ({ dailyMealData, selected, onSelect }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="mx-8">
        {Object.keys(dailyMealData).map((key) => {
          //Note: Key is a meal name
          const mealName = key[0].toUpperCase() + key.slice(1);
          const selectedMeal = selected[key as keyof SelectedDailyMealChoices];
          return (
            <Box key={key} className="mt-4">
              <Accordion className="rounded-xl border-solid border-2 border-indigo-600">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="flex items-center"
                >
                  {IconMealMapping[key as keyof SelectedDailyMealChoices]}
                  <Typography className="mt-1" variant="h5">
                    {mealName}
                  </Typography>
                  <Typography className="mt-1 ml-10" variant="h5">
                    {selectedMeal?.name || ""}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {dailyMealData[key as keyof AvailableDailyMenu].map(
                    (menu_option) => {
                      const isSelected = selectedMeal?.id === menu_option.id;
                      return (
                        <MealChoiceCard
                          key={key + menu_option.id}
                          mealKey={key as keyof MealsInDay}
                          handleOnSelect={onSelect}
                          selected={isSelected}
                          meal={menu_option}
                        />
                      );
                    }
                  )}
                </AccordionDetails>
              </Accordion>
            </Box>
          );
        })}
      </div>
    </main>
  );
};
export default MealSelectionForm;
