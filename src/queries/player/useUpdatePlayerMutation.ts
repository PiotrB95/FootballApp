import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi'
import { PlayerEntity, PlayerDto } from '../../types'

export const useUpdatePlayerMutation = (playerId: string) => {
  const { apiPut } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['players', 'update', playerId],
    mutationFn: async (payload: PlayerDto) => {
      return apiPut<PlayerEntity, PlayerDto>(`players/${playerId}`, payload)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['players'],
      })
    },
  })

  return {
    mutate,
    isPending,
  }
}
