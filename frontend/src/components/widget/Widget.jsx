import { AccountBalanceWalletOutlined,
     KeyboardArrowUp, MonetizationOnOutlined,
      PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import "../widget/widget.scss"
import { useSelector, useDispatch} from "react-redux"

const Widget = ({type}) => {

    let data;
    const user = useSelector(state=>state.employee.currentEmployee)

    
         if(type==="paid"){  
                    data = {
                        title: "Paid days Left",
                        taken: Math.abs(user.paidLeft - user.paid),
                        left:` you have ${user.paidLeft} left`,
                       
    
                    }
                }else if(type==="upaid"){ 
                    data = {
                        title: "Unpaid days left",
                        taken: Math.abs(user.unpaidLeft - user.unpaid),
                        left:`you have ${user.unpaidLeft}`,
                       
    
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