import { api } from "../../lib";
import { IFolderCreate, IFolderMoveTrash, IFoldersGet, IFolderUpdate } from "../../types/IFolders";

export const findAllFoldersApi = async (data: IFoldersGet) => {

    const { data: folders } = await api.post('/media/get-content-folder', data, {requiresAuth: true});
    return folders;

}

export const createFoldersApi = async (data: IFolderCreate) => {

    const { data: folder } = await api.post('/media/create-folder', data, {requiresAuth: true});
    return folder;

}

export const updateFolderApi = async (data: IFolderUpdate) => {

    const { data: folder } = await api.put('/media/rename-folder', data, {requiresAuth: true});
    return folder; 

}

export const moveTrashFolderApi = async (data: IFolderMoveTrash) => {

    const { data: folder } = await api.put('/media/move-folder-trash', data, {requiresAuth: true});
    return folder; 

}

export const restoreFolderApi = async (data: IFolderMoveTrash) => {

    const { data: folder } = await api.put('/media/restore-folder', data, {requiresAuth: true});
    return folder; 

}

export const deleteFolderApi = async (data: IFolderMoveTrash) => {

    const { data: folder } = await api.delete('/media/folder', data, {requiresAuth: true});
    return folder; 

}