import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import { supabaseClient } from "@/api/client";
import { Tables } from "@/types/supabaseHelpers";

export type AllMealsQueryResult = Tables<"menu_option"> | null | undefined;
type ReturnVal = {
  data: AllMealsQueryResult[] | null | undefined;
  isValidating: boolean;
  isLoading: boolean;
};

//Given a timestamp, return the current menu period
export const useAllMeals = (): ReturnVal => {
  const { data, isLoading, isValidating } = useQuery<AllMealsQueryResult>(
    supabaseClient.from("menu_option").select("*"),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, isLoading, isValidating };
};

//Given a menu_period_id, return all menus with that foreign key

//Given menu_id, return all meals
