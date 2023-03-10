// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const feelmeAPI = createApi({
  reducerPath: 'feelmeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getHealthCheck: builder.query({
      query: () => `/health-check`,
    }),
    getHappinessPoints: builder.query({
      query: (id) => `/users/employees/${id}/happiness-points`,
    }),
    getEmployees: builder.query({
      query: () => `/users/employees`,
    }),
    login: builder.mutation({
      query: credential => ({
        url: '/login',
        method: 'POST',
        body: credential,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
    // getEmployee: builder.query({
    //   query: (id) => `/users/employees/${id}`,
    // }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHealthCheckQuery, useGetHappinessPointsQuery, useGetEmployeesQuery, useLoginMutation, useLogoutMutation } = feelmeAPI