import apiSliceAdmin from "../../API/apiSliceAdmin";

const categoryApi = apiSliceAdmin.injectEndpoints({
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: (data: object) => ({
                method: "POST",
                url: `/admin/create/category`,
                body: data,
            }),
            invalidatesTags: ["Category"],
        }),
        getCategories: builder.query({
            query: () => ({
                method: "GET",
                url: `/admin/fetch/category`,
            }),
            providesTags: ["Category"],
        }),
        deleteCategory: builder.mutation({
            query: (id: number) => ({
                method: "DELETE",
                url: `/admin/delete/category/${id}`,
            }),
            invalidatesTags: ["Category"],
        }),
        updateCategory: builder.mutation({
            query: ({ id, data }: { id: number, data: object }) => ({
                method: "PUT",
                url: `/admin/update/category/${id}`,
                body: data,
            }),
            invalidatesTags: ["Category"],
        }),
    }),
});

export const {
    useCreateCategoryMutation,
    useGetCategoriesQuery,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation
} = categoryApi;