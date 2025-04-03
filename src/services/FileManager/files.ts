import { api } from "../../lib";
import { IFilesCreate } from "../../types/IFiles";

export const createFilesApi = async (data: FormData) => {

    const { data: files } = await api.post('/media/upload-file', data, {requiresAuth: true});
    return files;

}