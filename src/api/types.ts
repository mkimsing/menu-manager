export type MealChoice = {
  id: number | string;
  imageURL: string;
  name: string;
  description: string;
};

export type DailyMealChoices = {
  breakfast: MealChoice[];
  lunch: MealChoice[];
  dinner: MealChoice[];
};

export type SelectedMealChoices = {
  breakfast: MealChoice;
  lunch: MealChoice;
  dinner: MealChoice;
};
export enum MealsInDay {
  breakfast = "breakfast",
  lunch = "lunch",
  dinner = "dinner",
}

export enum DayOfWeek {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

export type WeeklyMealChoices = {
  [key in DayOfWeek]: DailyMealChoices;
};
