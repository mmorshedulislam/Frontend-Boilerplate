import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface initialState {
    count: number;
}

const initialState: initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }
    }
})

export const { increment, incrementByValue } = counterSlice.actions

export default counterSlice.reducer