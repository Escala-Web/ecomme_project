import { api } from "../../lib";
import { IVariationCreate } from "../../types/IVariations";

export const variationCreateApi = async (data: IVariationCreate) => {

    const { data: variation } = await api.post('/variations/create-variation', data, { requiresAuth: true });
    return variation;

}

export const variationFindAllApi = async () => {

    const { data: variation } = await api.get('/variations/get-variations', { requiresAuth: true })
    return variation;

}