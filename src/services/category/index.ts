import { api } from "../../lib"
import { ICategoryCreate } from "../../types/ICategory";

export const categoryCreateApi = async (data: ICategoryCreate) => {

    const { data: category } = await api.post('/categories/create', data, {requiresAuth: true});
    return category;

};