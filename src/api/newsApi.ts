import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTransformResponse } from "../helpers/getTransformData";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2/",
  }),
  tagTypes: ["CountryNews", "SearchNews"],
  endpoints: (builder) => ({
    getArticleByCountry: builder.query({
      query: (country) =>
        `top-headlines?country=${country}&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`,
      providesTags: ["CountryNews"],
      transformResponse: getTransformResponse(),
    }),
    getArticleBySearch: builder.query({
      query: (search) =>
        `everything?q=${search}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
      providesTags: ["SearchNews"],
      transformResponse: getTransformResponse(),
    }),
  }),
});

export const { useGetArticleByCountryQuery, useGetArticleBySearchQuery } =
  newsApi;
