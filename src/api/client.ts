import axios from "axios";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
