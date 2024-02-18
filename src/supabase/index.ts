import { createClient } from "@supabase/supabase-js";

export const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6a3lxdGxqc2NvY2d1ZGxsaHNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzM3NDAxNywiZXhwIjoyMDIyOTUwMDE3fQ.NYzo2oPSySVzXyx92UKNACvC4luJH52uBHNaOaIVpF0";

export const SUPABASE_URL = "https://azkyqtljscocgudllhsl.supabase.co";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
