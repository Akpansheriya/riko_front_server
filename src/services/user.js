import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_URL, 
  }),
  endpoints: (builder) => ({
    userList: builder.query({
      query: ({ page = 1, pageSize = 10,searchParams,date }) => ({
        url: `user/user-list`,
        method: "GET",
        params: { page, pageSize,searchParams,date }, 
      }),
    }),
    recentUserList: builder.query({
      query: ({ page = 1, pageSize = 10,searchParams,date }) => ({
        url: `user/recent-user-list`,
        method: "GET",
        params: { page, pageSize,searchParams,date }, 
      }),
    }),
    activeUserList: builder.query({
      query: ({ page = 1, pageSize = 10,searchParams,date }) => ({
        url: `user/active-user-list`,
        method: "GET",
        params: { page, pageSize,searchParams,date }, 
      }),
    }),
    formData: builder.query({
      query: ({ id }) => ({
        url: `user/form-data`,
        method: "GET",
        params: { id }, 
      }),
    }),
  }),
});

export const { useUserListQuery,useActiveUserListQuery,useRecentUserListQuery,useFormDataQuery } = userApi;
