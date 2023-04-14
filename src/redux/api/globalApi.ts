import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Subscriber, Banner, Category, Size, Color, Contact,Product } from "../type/type";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:12002/api/",
  }),

  tagTypes: ["Banner", "Category", "Size", "Color", "Subscriber", "Contact","Product"],
  endpoints: (builder) => ({
    getAllBanner: builder.query<Banner[], void>({
      query() {
        return {
          url: `/banner`,
          // credentials: "include",
        };
      },
      providesTags: ["Banner"],
    }),

    getSingleBanner: builder.query<Banner, number>({
      query(id) {
        return {
          url: `/banner/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["Banner"],
    }),

    createSubscriber: builder.mutation<Subscriber, FormData>({
      query(data) {
        return {
          url: "/subscriber",
          method: "POST",
          // credentials: 'include',
          body: data,
        };
      },
      invalidatesTags: ["Subscriber"],
    }),

    createContact: builder.mutation<Contact, FormData>({
      query(data) {
        return {
          url: "/contact",
          method: "POST",
          // credentials: 'include',
          body: data,
        };
      },
      invalidatesTags: ["Contact"],
    }),

    //Category=============================================>
    getAllCategory: builder.query<Category[], void>({
      query() {
        return {
          url: `/category`,
          // credentials: "include",
        };
      },
      transformResponse: (res: Category[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["Category"],
    }),

    getSingleCategory: builder.query<Category, number>({
      query(id) {
        return {
          url: `/category/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["Category"],
    }),

    createCategory: builder.mutation<Category, FormData>({
      query(newCategory) {
        // console.log("success")
        return {
          url: "/category",
          method: "POST",
          // credentials: 'include',
          body: newCategory,
        };
      },
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation<Category, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/category/${id}`,
          method: "PATCH",
          // credentials: 'include',
          body: updatedData,
        };
      },
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation<Category, number>({
      query(id) {
        return {
          url: `/category/${id}`,
          method: "Delete",
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Category"],
    }),

    //Size===============================================>
    getAllSize: builder.query<Size[], void>({
      query() {
        return {
          url: `/size`,
          // credentials: "include",
        };
      },
      providesTags: ["Size"],
    }),

    createSize: builder.mutation<Size, FormData>({
      query(data) {
        // console.log("success")
        return {
          url: "/size",
          method: "POST",
          // credentials: 'include',
          body: data,
        };
      },
      invalidatesTags: ["Size"],
    }),

    deleteSize: builder.mutation<Size, string>({
      query(id) {
        return {
          url: `/size/${id}`,
          method: "Delete",
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Size"],
    }),

    //Color===============================================>
    getAllColor: builder.query<Color[], void>({
      query() {
        return {
          url: `/color`,
          // credentials: "include",
        };
      },
      providesTags: ["Color"],
    }),

    createColor: builder.mutation<Color, FormData>({
      query(data) {
        // console.log("success")
        return {
          url: "/color",
          method: "POST",
          // credentials: 'include',
          body: data,
        };
      },
      invalidatesTags: ["Color"],
    }),

    deleteColor: builder.mutation<Color, number>({
      query(id) {
        return {
          url: `/color/${id}`,
          method: "Delete",
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Color"],
    }),

    //Genre===============================================>
    // getAllGenre: builder.query<Genre[], void>({
    //   query() {
    //     return {
    //       url: `/genre`,
    //       // credentials: "include",
    //     };
    //   },
    //   providesTags: ["Color"],
    // }),

    // createGenre: builder.mutation<Genre, FormData>({
    //   query(data) {
    //     // console.log("success")
    //     return {
    //       url: "/genre",
    //       method: "POST",
    //       // credentials: 'include',
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["Genre"],
    // }),

    // getSingleGenre: builder.query<Genre, string>({
    //   query(id) {
    //     return {
    //       url: `/genre/${id}`,
    //       // credentials: 'include',
    //     };
    //   },
    //   providesTags: ["Genre"],
    // }),

    // updateGenre: builder.mutation<Genre, { id: string; updatedData: FormData }>({
    //   query({ id, updatedData }) {
    //     return {
    //       url: `/genre/${id}`,
    //       method: "PATCH",
    //       // credentials: 'include',
    //       body: updatedData,
    //     };
    //   },
    //   invalidatesTags: ["Genre"],
    // }),

    // deleteGenre: builder.mutation<Genre, string>({
    //   query(id) {
    //     return {
    //       url: `/genre/${id}`,
    //       method: "Delete",
    //       // credentials: 'include',
    //     };
    //   },
    //   invalidatesTags: ["Genre"],
    // }),

    getAllProduct: builder.query<Product[], void>({
      query() {
        return {
          url: `/product`,
          // credentials: "include",
        };
      },
      transformResponse: (res: Product[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["Product"],
    }),

  }),
});

export const {
  // useGetAllSearchTagQuery,
  // useCreateSearchTagMutation,
  // useDeleteSearchTagMutation,
  // useGetSingleSearchTagQuery,
  // useUpdateSearchTagMutation,

  useGetAllBannerQuery,
  useGetSingleBannerQuery,

  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
  useUpdateCategoryMutation,
  useGetSingleCategoryQuery,

  useCreateSizeMutation,
  useDeleteSizeMutation,
  useGetAllSizeQuery,

  useCreateColorMutation,
  useDeleteColorMutation,
  useGetAllColorQuery,

  // useGetAllGenreQuery,
  // useCreateGenreMutation,
  // useDeleteGenreMutation,
  // useGetSingleGenreQuery,
  // useUpdateGenreMutation,

  useCreateSubscriberMutation,

  useGetAllProductQuery,

  useCreateContactMutation,
} = globalApi;
