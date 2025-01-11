import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi'
import { PlayerEntity } from '../../types'

export const useDeletePlayerMutation = () => {
  const { apiDelete } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['players', 'delete'],
    mutationFn: async (playerId: string) => {
      return apiDelete<PlayerEntity>(`players/${playerId}`)
    },
    onSuccess: (deletePlayer) => {
      queryClient.invalidateQueries({
        queryKey: ['players'],
      })
      return deletePlayer
    },
  })

  return {
    mutate,
    isPending,
  }
}
