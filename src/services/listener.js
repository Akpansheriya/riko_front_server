import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listenerApi = createApi({
  reducerPath: "listenerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_URL,
  }),
  endpoints: (builder) => ({
    listenerList: builder.query({
      query: ({ page = 1, pageSize = 10, searchParams, date }) => ({
        url: `listener/listener-list`,
        method: "GET",
        params: { page, pageSize, searchParams, date },
      }),
    }),
    applications: builder.query({
      query: ({ page = 1, pageSize = 10, searchParams, date }) => ({
        url: `listener/listener-applications`,
        method: "GET",
        params: { page, pageSize, searchParams, date },
      }),
    }),
    profileApprovals: builder.query({
      query: ({ page = 1, pageSize = 10, searchParams, date }) => ({
        url: `listener/listener-profiles`,
        method: "GET",
        params: { page, pageSize, searchParams, date },
      }),
    }),
    listenerFormLink: builder.mutation({
      query: (userId) => ({
        url: `listener/listener-form-link`,
        method: "POST",
        body: { id: userId },
      }),
    }),
    listenerProfileFormLink: builder.mutation({
      query: (userId) => ({
        url: `listener/listener-profile-form-link`,
        method: "POST",
        body: { id: userId },
      }),
    }),
    rejectRequest: builder.mutation({
      query: ({userId, reason, text}) => ({
        url: `listener/reject-request`,
        method: "POST",
        body: { userId, reason, text },
      }),
    }),
    listenerProfileApproval: builder.mutation({
      query: (userId) => ({
        url: `listener/listener-request-approval`,
        method: "POST",
        body: { userId },
      }),
    }),
    listenerProfile: builder.query({
      query: (id) => ({
        url: `listener/listener-profile/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useListenerListQuery,
  useListenerFormLinkMutation,
  useProfileApprovalsQuery,
  useApplicationsQuery,
  useListenerProfileFormLinkMutation,
  useRejectRequestMutation,
  useListenerProfileApprovalMutation,
  useListenerProfileQuery
} = listenerApi;
