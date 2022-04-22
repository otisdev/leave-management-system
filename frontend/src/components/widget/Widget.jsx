import React from 'react'
import "../widget/widget.scss"
import { useSelector, useDispatch} from "react-redux"

const Widget = ({type}) => {

    let data ={};
    const user = useSelector(state=>state.employee.currentEmployee);
    const req = useSelector(state=>state.request);

    
         if(type==="paid"){  
                    data = {
                        title: "Paid days taken",
                        taken: Math.abs(user.paidLeft - user.paid ),
                        left:` you have ${user.paidLeft } days left`,    
                    }
                }else if(type==="unpaid"){ 
                    data = {
                        title: "Unpaid days taken",
                        taken: Math.abs(user.unpaidLeft - user.unpaid ),
                        left:`you have ${user.unpaidLeft} days left`,
                    }
                }

    
  return (
   
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.taken}</span>
            <span className="link">{data.left}</span>
        </div>
        </div>
   

    )
}

export default Widget