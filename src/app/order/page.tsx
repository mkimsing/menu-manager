"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import MealSelectionForm from "./components/MealSelectionForm";
import {
  MealsInDay,
  DaysOfWeek,
  Menu_Option,
  SelectedDailyMealChoices,
} from "@/types/types";
import { WeeklyMealData } from "@/api/data";
const steps = Object.keys(DaysOfWeek);

// Initialize the empty weekly order object
type WeeklySelection = {
  [key in DaysOfWeek]: SelectedDailyMealChoices;
};
const initWeeklySelection = {} as WeeklySelection;
Object.keys(DaysOfWeek).forEach((key) => {
  initWeeklySelection[key as keyof typeof DaysOfWeek] = {
    breakfast: undefined,
    lunch: undefined,
    dinner: undefined,
  };
});

export default function Page() {
  //Handle selected state
  const [weeklySelection, setWeeklySelection] = useState(initWeeklySelection);

  const [activeStep, setActiveStep] = useState(0);
  const [dayofWeek, setDayOfWeek] = useState(DaysOfWeek.Monday as string);
  useEffect(() => {
    setDayOfWeek(Object.keys(DaysOfWeek)[activeStep]);
  }, [activeStep]);

  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onHandleSelect = (menu_option: Menu_Option, mealKey: MealsInDay) => {
    setWeeklySelection({
      ...weeklySelection,
      [dayofWeek]: {
        ...weeklySelection[dayofWeek as keyof WeeklySelection],
        [mealKey]: menu_option,
      },
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-screen h-[30vh] mb-4">
        <Image src="https://picsum.photos/id/196/200/300" alt="Hero" fill />
        <div className="relative flex flex-col justify-center items-center h-full">
          <Typography color="white" variant="h3">
            Weekly Order
          </Typography>
        </div>
      </div>
      <Box className="mx-8">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
            <MealSelectionForm
              dailyMealData={
                WeeklyMealData[dayofWeek as keyof typeof WeeklyMealData]
              }
              selected={
                weeklySelection[
                  dayofWeek as keyof WeeklySelection
                ] as SelectedDailyMealChoices
              }
              onSelect={onHandleSelect}
            />
          </React.Fragment>
        )}
      </Box>
    </main>
  );
}
