"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import MealChoiceCard from "@/components/MealChoiceCard";
import MealDetailsModal from "@/components/MealDetailsModal";
const Page = () => {
  //Handle selected state
  const [selected, setSelected] = useState(0);

  //Handle state for modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    handleOpen();
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
        <MealChoiceCard selected={false} handleOnClick={handleOnClick} />
        <MealChoiceCard selected={false} handleOnClick={handleOnClick} />
      </div>
      <MealDetailsModal isOpen={open} handleClose={handleClose} />
    </main>
  );
};
export default Page;
