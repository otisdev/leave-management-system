import {createSlice} from "@reduxjs/toolkit"

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        currentEmployee: null,
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
            state.currentEmployee.paid = action.payload.paid;
            state.currentEmployee.paidLeft = action.payload.paidLeft;
            state.currentEmployee.unpaid = action.payload.unpaid;
            state.currentEmployee.unpaidLeft = action.payload.unpaidLeft;
        
            
        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.error = true;
        },


    },
})

export const {loginStart, loginSuccess, loginFailure} = employeeSlice.actions;
export default employeeSlice.reducer;