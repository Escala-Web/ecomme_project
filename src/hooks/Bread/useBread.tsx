import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { breadCreateApi, breadDeleteApi, breadFindAllApi } from "../../services/bread";
import { toast } from "react-toastify";
import { IBread } from "../../types/IBread";

interface IBreandResponse {
    success: boolean,
    message: string
}

export const useBread = () => {

    const queryClient = useQueryClient();

    const findAll = useQuery<IBread>({
        queryFn: breadFindAllApi,
        queryKey: (['breads'])
    })

    const create = useMutation({
        mutationFn: breadCreateApi,
        onSuccess: (data: IBreandResponse) => {
            toast.success(data.message);
            queryClient.invalidateQueries(['breads']);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })

    const deleteBrands = useMutation({
        mutationFn: breadDeleteApi,
        onSuccess: (data: IBreandResponse) => {
            toast.success(data.message);
            queryClient.invalidateQueries(['breads']);
            console.log(data)
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })

    return { create, findAll, deleteBrands };
}