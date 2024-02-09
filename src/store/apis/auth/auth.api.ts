import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseQuery } from "../config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["auth"],
  endpoints: ({ mutation }) => ({}),
});

export const {} = authApi;
