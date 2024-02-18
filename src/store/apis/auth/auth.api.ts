import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../../../supabase";
import { Routes } from "../../../constants";
// import { baseQuery } from "../config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["auth"],
  endpoints: ({ mutation }) => ({
    googleAuth: mutation({
      queryFn: async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: "http://localhost:5173/dashboard",
          },
        });

        if (error) {
          throw error;
        }

        return { data };
      },
    }),
    emailSignup: mutation({
      queryFn: async ({ email, password, fullname }) => {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              fullname,
            },
            emailRedirectTo: `http://localhost:5173${Routes.Dashboard}`,
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
    // createDev: mutation({
    //   queryFn: async (id) => {
    //     const { data, error } = await supabase
    //       .from("devs-prototype")
    //       .insert({ id });

    //     if (error) {
    //       throw error;
    //     }

    //     return { data };
    //   },
    // }),
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
  // useCreateDevMutation,
  useSignOutMutation,
} = authApi;
