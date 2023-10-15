import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function DailySelection() {
  return (
    <div className="flex items-center shadow-md bg-white rounded-lg border-black border-1 py-4 px-6">
      <div>
        <Typography variant="h5" className="mb-4">
          Monday
        </Typography>
        <div className="flex items-center">
          <Image
            src="https://picsum.photos/200/300"
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
            <Typography variant="subtitle2">Chicken Pesto Pasta</Typography>
            <Typography variant="body1">
              Here is some description of a food item
            </Typography>
          </div>
        </div>
      </div>
      <ArrowForwardIosIcon fontSize="medium" />
    </div>
  );
}
