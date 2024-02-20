import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../../../supabase";
import { Routes } from "../../../constants";
// import { baseQuery } from "../config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["auth"],
  endpoints: ({ query, mutation }) => ({
    googleAuth: mutation({
      queryFn: async (route) => {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: `https://job-matching-navy.vercel.app${route}`,
          },
        });

        if (error) {
          throw data;
        }

        return { data };
      },
    }),
    emailSignup: mutation({
      queryFn: async ({ email, password, full_name }) => {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name,
            },
            emailRedirectTo: `https://job-matching-navy.vercel.app${Routes.Dashboard}`,
          },
        });

        if (error) {
          throw error;
        }

        return { data };
      },
    }),
    emailSignin: mutation({
      queryFn: async ({ email, password }) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw error;
        }

        return { data };
      },
    }),
    userData: query<any, void>({
      queryFn: async () => {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          throw error;
        }

        return { data };
      },
    }),
    signOut: mutation({
      queryFn: async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
          throw error;
        }

        return { error };
      },
    }),
  }),
});

export const {
  useGoogleAuthMutation,
  useEmailSignupMutation,
  useEmailSigninMutation,
  useUserDataQuery,
  useSignOutMutation,
} = authApi;
