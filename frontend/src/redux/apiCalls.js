import { publicRequest } from "../request";
import { loginSuccess,loginFailure,loginStart } from "./employeeRedux";
import { requestStart,requestSuccess,requestFailure } from "./requestRedux";



export const login = async (dispatch, employee) =>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/user", employee);
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure());
        console.log(err);
    }
}

export const request = async (dispatch, employee) => {
    dispatch(requestStart());
    try{
        const res = await publicRequest.post('/requests', employee)
        dispatch(requestSuccess(res.data))
    }catch(err){
        dispatch(requestFailure());
        console.log(err)
    }
}