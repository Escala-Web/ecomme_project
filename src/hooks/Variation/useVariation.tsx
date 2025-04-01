import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { variationCreateApi, variationFindAllApi } from "../../services/variation";
import { toast } from "react-toastify";
import { IVariation } from "../../types/IVariations";

interface variationResponse {
    success: boolean,
    message: string
}
export const useVariation = () => {

    const clientQuery = useQueryClient();

    const findAllVariation = useQuery<IVariation>({
        queryFn: variationFindAllApi,
        queryKey: (['variation']),
    })

    const createVariation = useMutation({
        mutationFn: variationCreateApi,
        onSuccess: (data: variationResponse) => {
            toast.success(data.message);
            clientQuery.invalidateQueries(['variation'])
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })

    return { createVariation, findAllVariation };
}