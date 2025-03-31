import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Editor } from "../pages/Editor"
import { DashboardRoute } from "../pages/Dashboard"

export const RouteApp = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Editor />}/>

                <Route path="/administrativo*" element={<DashboardRoute />} />
            </Routes>
        </BrowserRouter>
    )
}