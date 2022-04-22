import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Employee from "./pages/employee/Employee";
import { useSelector } from "react-redux";


function App() {

  const user = useSelector(state=>state.employee.currentEmployee)
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" >
        <Route index element={<Home/>} />
        <Route path ="/employee" element ={user === null ? <Navigate to ="/"/> : <Employee/> } />
        <Route path="/dashboard" element={user === null || !user.isAdmin ? <Navigate to ="/"/> : <Admin/> } />
    </Route>
    </Routes>
  </BrowserRouter>
   );
}

export default App;
