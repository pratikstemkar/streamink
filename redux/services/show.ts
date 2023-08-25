import { IShow } from "@/lib/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL
export const showApi = createApi({
  reducerPath: "showApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getShowByName: builder.query<IShow, string>({
      query: (name) => `shows/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShowByNameQuery } = showApi;
