import { supabaseClient } from "@/api/client";
import { AdminWeeklyMenu, AdminDailyMenu } from "@/types/types";
import { Tables } from "@/types/supabaseHelpers";
import { addDays } from "date-fns";

type Payload = {
  name?: Tables<"menu_period">["name"];
  active_start_date?: Date;
  weeklyMenu: AdminWeeklyMenu;
};
//Given a timestamp, return the current menu period
export const submitMenu = async ({
  name,
  active_start_date,
  weeklyMenu,
}: Payload) => {
  //Build requisite data for RPC function
  const days: string[] = [];
  const meals: string[] = [];
  const menu_option_ids: number[] = [];
  Object.keys(weeklyMenu).forEach((weeklyKey, index) => {
    // Generate date string based on start date
    const day = addDays(new Date(active_start_date || ""), index).toUTCString();
    Object.keys(weeklyMenu[weeklyKey as keyof AdminWeeklyMenu]).forEach(
      (dailyKey) => {
        const menu =
          weeklyMenu[weeklyKey as keyof AdminWeeklyMenu][
            dailyKey as keyof AdminDailyMenu
          ];
        days.push(day);
        meals.push(dailyKey);
        menu_option_ids.push(
          ...Object.keys(menu)
            .filter((mealId) => menu[mealId])
            .map((el) => Number(el))
        );
      }
    );
  });

  const res = await supabaseClient.rpc("insert_weekly_menu", {
    input_menu_period_name: name || null,
    input_menu_period_active_start_date: active_start_date || null,
    input_menu_days: days,
    input_menu_meal: meals,
    input_menu_menu_options: menu_option_ids,
  });

  return res;
};
