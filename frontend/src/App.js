import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Employee from "./pages/employee/Employee";


function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" >
        <Route index element={<Home/>} />
        <Route path ="/employee" element ={<Employee/>} />
        <Route path="/dashboard" element={<Admin/>} />
    </Route>
    </Routes>
  </BrowserRouter>
   );
}

export default App;
