import { useMutation, useQueryClient } from "@tanstack/react-query";
import {CreatePlayerDto, PlayerEntity} from "../../types";
import {useApi} from "../../hooks/useApi.ts";

export const useCreatePlayerMutation = () => {
    const { apiPost } = useApi();
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationKey: ['players', 'create'],
        mutationFn: async (payload: CreatePlayerDto) => {
            return apiPost<PlayerEntity, CreatePlayerDto>('players', payload)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['players']
            })
        }
    })

    return {
        mutate,
        isPending
    }
}