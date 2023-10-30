import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import { supabaseClient } from "@/api/client";
import { MealChoice } from "../types";
import { Database } from "@/types/supabase";

type ReturnVal = {
  data: AllMealsQueryResult;
  isValidating: boolean;
  isLoading: boolean;
};

export type AllMealsQueryResult =
  | Database["public"]["Tables"]["meal"]["Row"][]
  | null
  | undefined;

//Given a timestamp, return the current menu period
export const useAllMeals = (): ReturnVal => {
  const { data, isLoading, isValidating } = useQuery<AllMealsQueryResult>(
    supabaseClient.from("meal").select("*"),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, isLoading, isValidating };
};

//Given a menu_period_id, return all menus with that foreign key

//Given menu_id, return all meals
