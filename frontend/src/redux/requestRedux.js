import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "request",
    initialState: {
        currentRequest:null,
        paid: 0,
        unpaid: 0,
        isFetching: false,
        error: false,
    }, 
    reducers: {
        //send request
        requestStart:(state)=> {
            state.isFetching = true;
        },
        requestSuccess: (state, action)=>{
            state.isFetching = false;
            state.currentRequest =  action.payload;
        },
        requestFailure: (state,action) => {
            state.isFetching = false;
            state.error = true;
        },

        //update request
        updateStart:(state) => {
            state.isFetching = true;
        },
        updatePaidSuccess: (state, action) => {
            state.isFetching = false;
            state.paid = action.payload.paid;
        },
        updateUnpaidSuccess: (state,action) => {
            state.isFetching = false;
            state.unpaid = action.payload.unpaid;   
        },
        updateFailure: (state) =>{
            state.error = true;
        }

    }
})

export const {requestStart, requestSuccess, requestFailure, updateStart, updatePaidSuccess,updateUnpaidSuccess, updateFailure} = requestSlice.actions;
export default requestSlice.reducer;