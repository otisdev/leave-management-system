import Leave from "./pages/Leave";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ViewLeave from "./pages/ViewLeave";


function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" >
        <Route index element={<Leave/>} />
        <Route path="/request" element={<ViewLeave/>} />
    </Route>
    </Routes>
  </BrowserRouter> 
   );
}

export default App;
