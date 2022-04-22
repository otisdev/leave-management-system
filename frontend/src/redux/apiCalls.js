import { publicRequest } from "../request";
import { loginSuccess,loginFailure,loginStart } from "./employeeRedux";
import { requestStart,requestSuccess,requestFailure, updatePaidSuccess,updateUnpaidSuccess,updateStart,updateFailure } from "./requestRedux";



export const login = async (dispatch, employee) =>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/user/login", employee);
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure());
        console.log(err);
    }
}

export const request = async (dispatch, employee) => {
    dispatch(requestStart());
    try{
        const res = await publicRequest.post('/request', employee)
        dispatch(requestSuccess(res.data))
    }catch(err){
        dispatch(requestFailure());
        console.log(err)
    }
}

export const update = async (dispatch,id, daysLeft, type, days) => {
    dispatch(updateStart());
    try{
        const res = await publicRequest.put(`/user/${id}`, daysLeft)
        if(type === "paid"){
        dispatch(updatePaidSuccess(days))
        }
        if(type === "unpaid"){
            dispatch(updateUnpaidSuccess(days))
        }
        
    }catch(err){
        dispatch(updateFailure());
    }
}