import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Services from "../pages/Services";
import UserPage from "../pages/UserPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="services" element={<Services/>}/>
            <Route path="users">
                <Route index element={<UserPage/>}/>
            </Route>

        </Route>
    )
)