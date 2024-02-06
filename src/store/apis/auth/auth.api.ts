import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery("/auth"),
  tagTypes: ["auth"],
  endpoints: ({ mutation }) => ({}),
});

export const {} = authApi;
