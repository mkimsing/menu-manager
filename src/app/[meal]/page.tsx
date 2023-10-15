"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import MealChoiceCard from "@/components/MealChoiceCard";
const page = () => {
  const handleOnClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    //TODO Open modal
  };
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-screen h-[30vh]">
        <Image src="https://picsum.photos/id/196/200/300" alt="Hero" fill />
        <div className="relative flex flex-col justify-center items-center h-full">
          <Typography color="white" variant="h3">
            Monday
          </Typography>
        </div>
      </div>
      <div className="mx-8">
        <MealChoiceCard selected={true} handleOnClick={handleOnClick} />
        <MealChoiceCard selected={true} handleOnClick={handleOnClick} />
        <MealChoiceCard selected={true} handleOnClick={handleOnClick} />
      </div>
    </main>
  );
};
export default page;
