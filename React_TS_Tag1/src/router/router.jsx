import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Homepage from '../pages/Homepage'
import AboutUs from "../pages/AboutUs";
import MemberDetailPage from "../components/MemberCards/components/MemberDetailPage";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage />} />
            <Route path="about-us">
                <Route index element={<AboutUs />} />
                <Route path=":id" element={<MemberDetailPage />} />
            </Route>
            <Route path="*" element={<h1>Page not FOUND - 404</h1>} />
        </Route>
    )
)