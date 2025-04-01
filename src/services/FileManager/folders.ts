import { api } from "../../lib";
import { IFolderCreate, IFoldersGet } from "../../types/IFolders";

export const findAllFoldersApi = async (data: IFoldersGet) => {

    const { data: folders } = await api.post('/media/get-content-folder', data, {requiresAuth: true});
    return folders;

}

export const createFoldersApi = async (data: IFolderCreate) => {

    const { data: folder } = await api.post('/media/create-folder', data, {requiresAuth: true});
    return folder;

}