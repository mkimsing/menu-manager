"use client";
import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CheckIcon from "@mui/icons-material/Check";
import { MealChoice, MealsInDay, DaysOfWeek } from "@/api/types";

type Props = {
  selected: boolean;
  handleOnSelect: (meal: MealChoice, mealKey: keyof MealsInDay) => void;
  meal: MealChoice;
  mealKey: keyof MealsInDay;
};
export default function MealChoiceCard({
  selected,
  handleOnSelect,
  meal,
  mealKey,
}: Props) {
  const { imageURL, name, description } = meal;
  return (
    <div
      onClick={(event) => {
        handleOnSelect(meal, mealKey);
      }}
      className={`${
        selected ? "bg-blue-50 border-blue-200" : "border-gray-300 bg-gray-50"
      } relative flex items-center shadow-md border border-solid 
      rounded-lg  py-4 px-6 my-3`}
    >
      <div>
        {selected && (
          <Chip
            sx={{ width: 150 }}
            label="Selected"
            color="primary"
            variant="filled"
            className="mb-2"
          />
        )}
        <div className="flex items-center">
          <Image
            src={imageURL}
            alt="food thumbnail"
            width="150"
            height="150"
            style={{
              objectFit: "cover",
              width: 150,
              height: 150,
            }}
          />
          <div className="ml-8 mr-14">
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body1">{description}</Typography>
          </div>
        </div>
        <div className="mt-4 flex justify-center w-full">
          <Button
            variant="contained"
            className="px-5"
            color="primary"
            onClick={(event) => {
              // Prevent outer div onClick when selecting
              event.stopPropagation();

              handleOnSelect(meal, mealKey);
            }}
          >
            Select
          </Button>
        </div>
      </div>
      {selected && (
        <div className="absolute right-6">
          <CheckIcon sx={{ fontSize: 42 }} color="success" />
        </div>
      )}
    </div>
  );
}
