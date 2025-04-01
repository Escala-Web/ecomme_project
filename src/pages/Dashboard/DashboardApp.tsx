import { Route, Routes } from "react-router-dom"
import { ProductsCreate } from "./pages/Products/create"
import { Painel } from "./pages/Painel"

export const DashboardApp = () => {

    return (
        <Routes>
            <Route index element={<Painel />}/>
            <Route path="/produtos" element={<ProductsCreate />} />
        </Routes>
    )

}