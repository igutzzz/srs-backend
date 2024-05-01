import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabaseUrl = "https://yrdxgxusjsngrkcymqzu.supabase.co";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
