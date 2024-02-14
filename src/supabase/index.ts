import { createClient } from "@supabase/supabase-js";

export const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6a3lxdGxqc2NvY2d1ZGxsaHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNzQwMTcsImV4cCI6MjAyMjk1MDAxN30.tBDQODLt3Yv5QMcC5k82KRG7kGVeosfhrHZNROEXSac";

export const SUPABASE_URL = "https://azkyqtljscocgudllhsl.supabase.co";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
