import { useMutation, useQueryClient } from "@tanstack/react-query";
import { categoryCreateApi } from "../../services/category";
import { toast } from "react-toastify";

interface ICategoryResponse {
    success: boolean,
    message: string
}
export const useCategory = () => {

    const clientQuery = useQueryClient();

    const createCategory = useMutation({
        mutationFn: categoryCreateApi,
        onSuccess: (data: ICategoryResponse) => {
            toast.success(data.message);
            clientQuery.invalidateQueries(['category'])
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })

    return { createCategory };
}