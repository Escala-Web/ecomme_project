import { Route, Routes } from "react-router-dom"
import { ProductsCreate } from "./pages/Products/create"

export const DashboardApp = () => {

    return (
        <Routes>
            <Route path="/produtos" element={<ProductsCreate />} />
        </Routes>
    )

}