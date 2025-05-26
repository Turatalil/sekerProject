import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneApi = createApi({
  reducerPath: 'phoneApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://43.204.218.113/' }),
  endpoints: (builder) => ({
    getPhones: builder.query({
      query: () => 'phones/',
    }),
  }),
});

export const { useGetPhonesQuery } = phoneApi;
