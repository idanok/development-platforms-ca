// js/supabase.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Replace with your Supabase project info
const SUPABASE_URL = "https://dkmuwvuvmwrsoxpkjzhn.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nStW_u_1lnWbpQ0VXuxMfA_0M9-gUYK";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
