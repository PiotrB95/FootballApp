import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { TeamDto, TeamEntity } from '../../types/team'

export const useCreateTeamMutation = () => {
  const { apiPost } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['teams', 'create'],
    mutationFn: async (payload: TeamDto) => {
      return apiPost<TeamEntity, TeamDto>('teams', payload)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['teams'],
      })
    },
  })

  return {
    mutate,
    isPending,
  }
}
