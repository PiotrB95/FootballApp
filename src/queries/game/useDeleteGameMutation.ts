import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi'
import { GameEntity } from '../../types'

export const useDeleteGameMutation = () => {
  const { apiDelete } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['games', 'delete'],
    mutationFn: async (gameId: string) => {
      return apiDelete<GameEntity>(`games/${gameId}`)
    },
    onSuccess: (deletePlayer) => {
      queryClient.invalidateQueries({
        queryKey: ['games'],
      })
      return deletePlayer
    },
  })

  return {
    mutate,
    isPending,
  }
}
