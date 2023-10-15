"use client";
import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CheckIcon from "@mui/icons-material/Check";

type Props = {
  selected: boolean;
  handleOnClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export default function MealChoiceCard({ selected, handleOnClick }: Props) {
  return (
    <div
      onClick={(event) => {
        handleOnClick(event);
      }}
      className="relative flex items-center shadow-md bg-white rounded-lg border-black border-1 py-4 px-6 my-3"
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
            src="https://picsum.photos/200/300"
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
            <Typography variant="h6">Chicken Pesto Pasta</Typography>
            <Typography variant="body1">
              Here is some description of a food item. Im sure it is delicious,
              you should definitely select this one. Its also probably healthy
            </Typography>
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
