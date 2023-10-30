import { Tables, Enums } from "@/types/supabaseHelpers";
/**
 * menu_period -> weekly menu, contains many menus
 * menu -> menu for a single meal in the day, contains many menu_options
 * menu_option -> single meal/food item
 */
export type Menu_Option = Tables<"menu_option">;

/**
 * Represents state of a menu that is being created on admin side
 */
// Object for each meal in day, and for each meal keys are mealIds and values are true/false.
// If not present, in object, is false
export type AdminMenu = {
  [mealId: string]: boolean;
};
export type AdminDailyMenu = {
  breakfast: AdminMenu;
  lunch: AdminMenu;
  dinner: AdminMenu;
};
export type AdminWeeklyMenu = {
  [key in DaysOfWeek]: AdminDailyMenu;
};

/**
 * Represents a user's meal selection
 */
export type SelectedMealChoice = Menu_Option | undefined;
export type SelectedDailyMealChoices = {
  breakfast: SelectedMealChoice;
  lunch: SelectedMealChoice;
  dinner: SelectedMealChoice;
};

export type SelectedWeeklyMealChoices = {
  [key in DaysOfWeek]: SelectedDailyMealChoices;
};

/**
 * Represents the available menu to order from
 */
export type AvailableMenu = Menu_Option[];

export type AvailableDailyMenu = {
  breakfast: AvailableMenu;
  lunch: AvailableMenu;
  dinner: AvailableMenu;
};
export type AvailableWeeklyMenu = {
  [key in DaysOfWeek]: AvailableDailyMenu;
};

export type MealsInDay = Enums<"meal">;

export enum DaysOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}
