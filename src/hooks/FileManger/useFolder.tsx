import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IFolderResponse } from '../../types/IFolders';
import { createFoldersApi, findAllFoldersApi } from '../../services/FileManager/folders';
import { toast } from 'react-toastify';

export const useFolder = () => {

    const queryClient = useQueryClient();

    const findAllFolders = useMutation({
        mutationFn: findAllFoldersApi,
        onSuccess: (data: IFolderResponse) => {
            queryClient.invalidateQueries('folders')
        }, onError: (error: any) => {
            // console.log(error)
        }
      });

      const createFolder = useMutation({
        mutationFn: createFoldersApi,
        onSuccess: (data: IFolderResponse) => {
            console.log(data)
            queryClient.invalidateQueries('folders')
            toast.success(data.message)
        },
        onError: (error: any) => {
            console.log(error)
        }
      })

    return { findAllFolders, createFolder };
}