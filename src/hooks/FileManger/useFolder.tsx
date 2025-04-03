import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFoldersApi, deleteFolderApi, findAllFoldersApi, moveTrashFolderApi, restoreFolderApi, updateFolderApi } from '../../services/FileManager/folders';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

interface IFolderResponse {
    success: boolean,
    message: string
};
type FoldersQueryData = {
    success: boolean;
    message: string;
    content: IFolderResponse[];
  };
export const useFolder = () => {

    const queryClient = useQueryClient();

    const findAllFolders = useMutation({
        mutationFn: findAllFoldersApi,
        onSuccess: (data: IFolderResponse) => {
            queryClient.invalidateQueries('folders');
        }, onError: (error: any) => {

        }
      });

      const createFolder = useMutation({
        mutationFn: createFoldersApi,
        onSuccess: (data: IFolderResponse) => {
            
            queryClient.invalidateQueries(['folders'])
            toast.success(data.message)
        },
        onError: (error: any) => {

        }
      })

      const renameFolder = useMutation({
        mutationFn: updateFolderApi,
        onSuccess: (data: IFolderResponse) => {
            toast.success(data.message);
            queryClient.invalidateQueries<FoldersQueryData>(['folders']);
        }
      })

      const moveTrashFolder = useMutation({
        mutationFn: moveTrashFolderApi,
        onSuccess: (data: IFolderResponse) => {
            toast.success(data.message);
            queryClient.invalidateQueries(['folders']);
        }
      })

      const restoreFolder = useMutation({
        mutationFn: restoreFolderApi,
        onSuccess: (data: IFolderResponse) => {
            toast.success(data.message);
            queryClient.invalidateQueries(['folders']);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
      })

      const deleteFolder = useMutation({
        mutationFn: deleteFolderApi,
        onSuccess: (data: IFolderResponse) => {
            toast.success(data.message);
            queryClient.invalidateQueries(['folders']);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
            console.log(error.response)
        }
      })

    


    return { findAllFolders, createFolder, renameFolder, moveTrashFolder, restoreFolder, deleteFolder };
}