import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://azkyqtljscocgudllhsl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6a3lxdGxqc2NvY2d1ZGxsaHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNzQwMTcsImV4cCI6MjAyMjk1MDAxN30.tBDQODLt3Yv5QMcC5k82KRG7kGVeosfhrHZNROEXSac"
);
