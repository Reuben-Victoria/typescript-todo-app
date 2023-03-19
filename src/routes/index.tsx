import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Login } from "../pages/auth/Login.page";
import { Signup } from "../pages/auth/Signup.page";


// type TodoRoutesProps = {
//     exact: true;
//     path: "string"
// }
export const TodoRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/todos" element={<DashboardLayout/>} />
            </Routes>
        </BrowserRouter>
    )
}