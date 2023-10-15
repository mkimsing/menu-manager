"use client";
import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";

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
      className="flex items-center shadow-md bg-white rounded-lg border-black border-1 py-4 px-6 my-3"
    >
      <div>
        <Chip
          sx={{ width: 150 }}
          label="Selected"
          color="primary"
          variant="filled"
          className="mb-2"
        />
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
          <div className="mx-8">
            <Typography variant="h6">Chicken Pesto Pasta</Typography>
            <Typography variant="body1">
              Here is some description of a food item. Im sure it is delicious,
              you should definitely select this one. Its also probably healthy
            </Typography>
          </div>
        </div>
        <div className="mt-4 flex justify-between w-full">
          <Button>Click for More Details</Button>
        </div>
      </div>
      <Checkbox
        defaultChecked
        sx={{ "& .MuiSvgIcon-root": { fontSize: 56 } }}
      />
    </div>
  );
}
