import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../../../supabase";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["dashboard"],
  endpoints: ({ query, mutation }) => ({
    loadDevs: query<any, void>({
      queryFn: async () => {
        const { data, error } = await supabase.from("devs-prototype").select();

        if (error) {
          throw error;
        }

        return { data };
      },
    }),
    createDev: mutation({
      queryFn: async (id) => {
        const { data, error } = await supabase
          .from("devs-prototype")
          .insert({ id });

        if (error) {
          throw error;
        }

        return { data };
      },
    }),
  }),
});

export const { useCreateDevMutation, useLoadDevsQuery } = dashboardApi;
