import { Route, Routes } from "react-router-dom";
import { ProductsCreate } from "./pages/Products/create";
import { Painel } from "./pages/Painel";
import { PicturesProvider } from "../../context/FileManager";

export const DashboardApp = () => {
	return (
		<PicturesProvider>
			<Routes>
				<Route index element={<Painel />} />
				<Route path="/produtos" element={<ProductsCreate />} />
			</Routes>
		</PicturesProvider>
	);
};
