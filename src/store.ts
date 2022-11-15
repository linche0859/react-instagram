import { configureStore } from '@reduxjs/toolkit'
import { homeService } from '@/services/home-service'
import followerSlice from '@/slices/followerSlice'

export const store = configureStore({
  reducer: {
    [homeService.reducerPath]: homeService.reducer,
    follower: followerSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeService.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
