import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi'
import { GameDto, GameEntity } from '../../types'

export const useUpdateGameMutation = (gameId: string) => {
  const { apiPut } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['games', 'update', gameId],
    mutationFn: async (payload: GameDto) => {
      return apiPut<GameEntity, GameDto>(`games/${gameId}`, payload)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['games'],
      })
    },
  })

  return {
    mutate,
    isPending,
  }
}
