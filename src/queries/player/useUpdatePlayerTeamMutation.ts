import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi'
import { PlayerEntity, UpdateTeamPlayerDto } from '../../types'

export const useUpdatePlayerTeamMutation = () => {
  const { apiPatch } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['players', 'patch'],
    mutationFn: async ({
      playerId,
      payload,
    }: {
      playerId: string
      payload: UpdateTeamPlayerDto
    }) => {
      return apiPatch<PlayerEntity, UpdateTeamPlayerDto>(
        `players/${playerId}`,
        payload,
      )
    },
    onSuccess: (updatePlayer) => {
      queryClient.invalidateQueries({
        queryKey: ['players'],
      })
      return updatePlayer
    },
  })

  return {
    mutate,
    isPending,
  }
}
