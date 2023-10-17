import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import { DaysOfWeek, SelectedMealChoices } from "@/api/types";
import { Box } from "@mui/material";

type Props = {
  dayOfWeek: keyof typeof DaysOfWeek;
  selectedDailyOption: SelectedMealChoices;
};
export default function DailySelection({
  dayOfWeek,
  selectedDailyOption,
}: Props) {
  return (
    <Link
      href={{
        pathname: "/monday",
        query: {
          dayOfWeek: dayOfWeek,
        },
      }}
      style={{
        color: "inherit",
        textDecoration: "inherit",
        display: "flex",
        width: "100%",
      }}
    >
      <div className="w-full flex items-center bg-white shadow-md rounded-lg border-solid border-2 border-indigo-600 py-4 px-6">
        <div className="flex-grow">
          <Typography variant="h5" className="mb-4">
            {dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}
          </Typography>
          {Object.keys(selectedDailyOption).map((key) => {
            const { imageURL, name, description } =
              selectedDailyOption[key as keyof SelectedMealChoices];

            return (
              <Box key={key + name} className="my-4">
                <div className="flex items-center">
                  <Image
                    src={imageURL}
                    alt="food thumbnail"
                    width="50"
                    height="50"
                    style={{
                      objectFit: "cover",
                      width: 50,
                      height: 50,
                    }}
                  />
                  <div className="mx-8">
                    <Typography variant="subtitle2">{name}</Typography>
                    <Typography variant="body1">{description}</Typography>
                  </div>
                </div>
              </Box>
            );
          })}
        </div>
        <ArrowForwardIosIcon fontSize="medium" />
      </div>
    </Link>
  );
}
