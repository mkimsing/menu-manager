import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import { AvailableDailyMenu } from "@/api/types";
import MealSelectionModal from "./MealSelectionModal/MealSelectionModal";
import { AllMealsQueryResult } from "@/api/hooks/useAllMeals";
type CheckboxSelected = {
  [key: string]: boolean;
};

// Object for each meal in day, and for each meal keys are mealIds and values are true/false.
// If not present, in object, is false

type Props = {
  day: string;
  availableDailyMenu: AvailableDailyMenu;
  handleDelete: () => void;
  handleSelect: (
    dayKey: string,
    mealKey: string,
    selectedId: string,
    newValue: boolean
  ) => void;
  allMealsData: AllMealsQueryResult;
};

export default function MenuCard({
  day,
  handleSelect,
  availableDailyMenu,
  handleDelete,
  allMealsData,
}: Props) {
  const [mealToModify, setMealToModify] = useState<
    "breakfast" | "lunch" | "dinner"
  >("breakfast");
  const [open, setOpen] = React.useState(false);

  const handleOpen = (mealKey: "breakfast" | "lunch" | "dinner") => {
    setMealToModify(mealKey);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChangeSelected = (selectedId: string, newValue: boolean) => {
    handleSelect(day, mealToModify, selectedId, newValue);
  };

  return (
    <Box className="p-4 bg-blue-100 rounded-xl ">
      <Typography variant="h6">{day}</Typography>
      {Object.keys(availableDailyMenu).map((mealInDayKey) => {
        return (
          <Box className="" key={mealInDayKey}>
            <Typography variant="subtitle1">{mealInDayKey}</Typography>
            {Object.keys(
              availableDailyMenu[
                mealInDayKey as keyof typeof availableDailyMenu
              ]
            )
              .filter(
                (mealId) =>
                  availableDailyMenu[
                    mealInDayKey as keyof typeof availableDailyMenu
                  ][mealId]
              )
              .map((mealId) => {
                const fullMealData = allMealsData?.find(
                  (meal) => String(meal.id) === mealId
                );

                return (
                  <Chip
                    key={mealInDayKey + mealId}
                    label={fullMealData?.name || ""}
                    onDelete={handleDelete}
                  />
                );
              })}

            <Button
              onClick={() =>
                handleOpen(mealInDayKey as "breakfast" | "lunch" | "dinner")
              }
            >
              Select
            </Button>
          </Box>
        );
      })}

      <MealSelectionModal
        open={open}
        handleClose={handleClose}
        selectedMeals={availableDailyMenu[mealToModify]}
        handleChangeSelected={handleChangeSelected}
      />
    </Box>
  );
}
