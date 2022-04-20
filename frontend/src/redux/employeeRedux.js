import {createSlice} from "@reduxjs/toolkit"

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        currentEmployee: null,
        total: 0,
        paid:0,
        unpaid:0,
        isFetching: false,
        error: false,
    },
    reducers: {

        loginStart: (state)=>{
            state.isFetching = true;
        },
        loginSuccess:(state, action)=>{
            state.isFetching = false;
            state.currentEmployee = action.payload;
            state.paid = action.payload.paid;
            state.unpaid = action.payload.unpaid;
        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.error = true;
        },

    },
})

export const {loginStart, loginSuccess, loginFailure} = employeeSlice.actions;
export default employeeSlice.reducer;