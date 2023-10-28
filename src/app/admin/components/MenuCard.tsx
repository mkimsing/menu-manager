import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { MealChoice, MealsInDay } from "@/api/types";
import MealSelectionModal from "./MealSelectionModal/MealSelectionModal";

type Props = {
  day: string;
  meals: {
    [key in MealsInDay]: MealChoice | undefined;
  };
};

const OPTIONS = [
  {
    id: 16,
    imageURL: "https://picsum.photos/id/179/200/300",
    name: "Margherita Pizza",
    description:
      "Thin-crust pizza topped with tomato sauce, mozzarella, fresh basil, and olive oil.",
  },
  {
    id: 35,
    imageURL: "https://picsum.photos/id/204/200/300",
    name: "Chicken Alfredo",
    description:
      "Creamy fettuccine pasta with grilled chicken and Parmesan cheese.",
  },
  {
    id: 34,
    imageURL: "https://picsum.photos/id/199/200/300",
    name: "French Toast",
    description:
      "Slices of bread soaked in a mixture of eggs and milk, cooked to golden perfection.",
  },
  {
    id: 12,
    imageURL: "https://picsum.photos/id/175/200/300",
    name: "Fruit Smoothie",
    description:
      "A refreshing fruit smoothie with banana, strawberry, and yogurt.",
  },
];
export default function MenuCard({ day, meals }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<MealChoice>(OPTIONS[0]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChangeSearch = (newValue: string | null) => {
    if (newValue) {
      const foundIndex = OPTIONS.map((e) => e.name).indexOf(newValue);
      setValue(OPTIONS[foundIndex]);
    }
  };
  return (
    <Box className="p-4 bg-blue-100 rounded-xl ">
      <Typography variant="h6">{day}</Typography>
      {Object.keys(meals).map((mealsKey) => {
        return (
          <Box className="" key={mealsKey}>
            <Typography variant="subtitle1">{mealsKey}</Typography>
            {meals[mealsKey as keyof typeof meals] ? (
              <Typography variant="subtitle1">
                {meals[mealsKey as keyof typeof meals]?.name}
              </Typography>
            ) : (
              <Button onClick={() => handleOpen()}>Select</Button>
            )}
          </Box>
        );
      })}

      <MealSelectionModal
        open={open}
        handleClose={handleClose}
        mealOptions={OPTIONS}
        searchValue={value.name}
        onChangeSearch={onChangeSearch}
      />
    </Box>
  );
}
