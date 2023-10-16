import Image from "next/image";
import DailySelection from "@/components/DailySelection";
import { WeeklyMealData } from "@/api/data";
import { WeeklyMealChoices } from "@/api/types";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-screen h-[50vh]">
        <Image src="https://picsum.photos/200/300" alt="Hero" fill />
        <div className="relative flex flex-col justify-center items-center h-full">
          <Typography color="white" variant="h1">
            Hello Michael
          </Typography>
          <Typography color="white" variant="h4">
            Your next meal submission will open in 2 days
          </Typography>
        </div>
      </div>
      <Box className="mx-4">
        <Typography variant="h4" className="mr-auto mt-4">
          Your selections for this week
        </Typography>
        {Object.keys(WeeklyMealData).map((key) => {
          return (
            <Box key={key} className="my-4 max-w-3xl w-full ">
              <DailySelection
                dayOfWeek={key as keyof WeeklyMealChoices}
                selectedDailyOption={{
                  breakfast:
                    WeeklyMealData[key as keyof WeeklyMealChoices][
                      "breakfast"
                    ][0],
                  lunch:
                    WeeklyMealData[key as keyof WeeklyMealChoices]["lunch"][0],
                  dinner:
                    WeeklyMealData[key as keyof WeeklyMealChoices]["dinner"][0],
                }}
              />
            </Box>
          );
        })}
      </Box>
    </main>
  );
}
