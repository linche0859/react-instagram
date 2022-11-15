import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type IGStory = {
  id: number
  name: string
  avatar: string
}

type IGPost = {
  id: number
  location: string
  account: string
  avatar: string
  photo: string
  likes: number
  description: string
  hashTags: string
  createTime: string
}

export const homeService = createApi({
  reducerPath: 'homeService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004'
  }),
  endpoints: (builder) => ({
    getIGStories: builder.query<IGStory[], any>({
      query: () => '/stories'
    }),
    getIGStory: builder.query<IGStory, number>({
      query: (id) => `/stories/${id}`
    }),
    getIGPosts: builder.query<IGPost[], any>({
      query: () => '/posts'
    })
  })
})

export const { useGetIGStoriesQuery, useGetIGPostsQuery } = homeService
