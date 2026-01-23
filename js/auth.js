import { supabase } from "./supabase.js";

// register a new user
export async function register(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
}

// login existing user
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

// logout current user
export async function logout() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// check current session
export async function getCurrentUser() {
  const { data } = await supabase.auth.getSession();
  return data.session?.user || null;
}
