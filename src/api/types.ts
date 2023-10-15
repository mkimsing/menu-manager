export type MealChoice = {
  imageURL: string;
  name: string;
  description: string;
};

export type DailyChoices = {
  breakfast: MealChoice[];
  lunch: MealChoice[];
  dinner: MealChoice[];
};

enum DayOfWeek {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

export type WeeklyMealChoices = {
  [key in DayOfWeek]: DailyChoices;
};
