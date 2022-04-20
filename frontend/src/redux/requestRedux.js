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
            state.isFetching = false
            state.currentRequest =  action.payload;
            state.paid = action.payload.paid;
            state.unapid = action.payload.unapid;
        },
        requestFailure: (state,action) => {
            state.isFetching = false;
            state.error = true;
        }

    }
})

export const {requestStart, requestSuccess, requestFailure} = requestSlice.actions;
export default requestSlice.reducer;