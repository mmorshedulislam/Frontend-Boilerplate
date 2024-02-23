import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSliceAdmin = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_REACT_APP_API
    }),
    endpoints: () => ({}),
    tagTypes: ["Category"]
})

export default apiSliceAdmin; 