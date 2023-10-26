import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import { supabaseClient } from "@/api/client";
//Given a timestamp, return the current menu period
export const useMeals = (timestamp: number) => {
  const { data, count } = useQuery(
    supabaseClient
      .from("menu_period")
      .select()
      .lt("end_date", timestamp)
      .gt("start_date", timestamp),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(data, count);
  return { data, count };
};

//Given a menu_period_id, return all menus with that foreign key

//Given menu_id, return all meals
