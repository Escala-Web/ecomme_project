import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createFilesApi } from "../../services/FileManager/files";
import { toast } from "react-toastify";

interface IFilesResponse {
    success: boolean,
    message: string
}
export const useFiles = () => {

    const clientQuery = useQueryClient();

    const createFile = useMutation({
        mutationFn: createFilesApi,
        onSuccess: (data: IFilesResponse) => {
            toast.success(data.message);
            clientQuery.invalidateQueries(['folders']);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message);
        }

    })


    return { createFile };

}