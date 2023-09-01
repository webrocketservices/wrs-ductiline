import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { get } from "firebase/database";
import { webSiteRef } from "../firebase";
import { WebSite } from "../types";

export const firebaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ["WebContent"],
  endpoints: (builder) => ({
    fetchWebContentData: builder.query<WebSite, void>({
      async queryFn() {
        try {
          const fetchedData = await get(webSiteRef());

          const result = { data: fetchedData.val() as WebSite };

          return result;
        } catch (error: any) {
          return { error: error.message };
        }
      },
      providesTags: ["WebContent"],
    }),
  }),
});
export const { useFetchWebContentDataQuery } = firebaseApi;
