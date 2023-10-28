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

export type WeeklyMealChoices = {
  [key in DaysOfWeek]: DailyMealChoices;
};

export type SelectedDailyMealChoices = {
  breakfast: MealChoice | undefined;
  lunch: MealChoice | undefined;
  dinner: MealChoice | undefined;
};

export type SelectedWeeklyMealChoices = {
  [key in DaysOfWeek]: SelectedDailyMealChoices;
};
export enum MealsInDay {
  breakfast = "breakfast",
  lunch = "lunch",
  dinner = "dinner",
}

export enum DaysOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}
