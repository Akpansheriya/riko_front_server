

  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
  import { setCookie, getCookie } from "../cookie_helper/cookie"; 
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `admin/login`,
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
console.log("data-----------",data.token)
        
          setCookie("token", data?.token);
          setCookie("userId", data?.admin?.id);

         
          dispatch(authApi.endpoints.getMe.initiate());
        } catch (error) {
          console.error("Login failed", error);
        }
      },
    }),
    getMe: builder.query({
      query: () => ({
        url: `/admin/get-login-detail`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,  
        },
      }),
    }),
    accountFreeze: builder.mutation({
        query: (id) => ({
          url: `user/account-freeze`, 
          method: "POST",
          body: { id },
        }),
      }),
      walletFreeze: builder.mutation({
        query: (id) => ({
          url: `user/wallet-freeze`, 
          method: "POST",
          body: { id },
        }),
      }),
  }),
});

export const {useAccountFreezeMutation,useWalletFreezeMutation ,useLoginMutation,useGetMeQuery} = authApi;
