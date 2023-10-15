import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DailyChoices } from "@/api/types";
import MealCard from "@/components/MealCard";
interface Props {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  activeIndex: number;
  dailyChoices: DailyChoices;
}

export default function Tab({
  children,
  dir,
  index,
  activeIndex,
  dailyChoices,
  ...rest
}: Props) {
  return (
    <div role="tabpanel" {...rest} hidden={activeIndex !== index}>
      {activeIndex === index && (
        <Box sx={{ p: 3 }}>
          {Object.keys(dailyChoices).map((key) => {
            return (
              <>
                <Typography variant="h1">{key}</Typography>;
                {dailyChoices[key as keyof DailyChoices].map((choice) => {
                  return (
                    <MealCard key={index + choice.name} MealData={choice} />
                  );
                })}
              </>
            );
          })}
        </Box>
      )}
    </div>
  );
}
