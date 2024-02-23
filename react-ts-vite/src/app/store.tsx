import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import apiSliceAdmin from '../features/API/apiSliceAdmin'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [apiSliceAdmin.reducerPath]: apiSliceAdmin.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSliceAdmin.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch