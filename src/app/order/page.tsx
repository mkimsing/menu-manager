"use client";
import MealCard from "@/components/MealCard";
import ToggleBar from "@/components/ToggleBar";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Order</h1>
      <ToggleBar />
      <MealCard />
    </main>
  );
};
export default page;
