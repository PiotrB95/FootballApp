import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GameDto, GameEntity } from '../../types'
import { useApi } from '../../hooks/useApi.ts'

export const useCreateGameMutation = () => {
  const { apiPost } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['games', 'create'],
    mutationFn: async (payload: GameDto) => {
      return apiPost<GameEntity, GameDto>('games', payload)
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
