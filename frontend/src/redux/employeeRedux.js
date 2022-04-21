import {createSlice} from "@reduxjs/toolkit"

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        currentEmployee: null,
        paid:0,
        paidLeft:0,
        unpaid:0,
        unpaidLeft:0,
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
            state.pLeft = action.payload.paidLeft;
            state.unpaid = action.payload.unpaid;
            state.upLeft = action.payload.unpaidLeft;
        
            
        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.error = true;
        },

    },
})

export const {loginStart, loginSuccess, loginFailure} = employeeSlice.actions;
export default employeeSlice.reducer;