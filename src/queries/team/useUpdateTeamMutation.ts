import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi'
import { TeamDto, TeamEntity } from '../../types/team'

export const useUpdateTeamMutation = (teamId: string) => {
  const { apiPut } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['teams', 'update', teamId],
    mutationFn: async (payload: TeamDto) => {
      return apiPut<TeamEntity, TeamDto>(`teams/${teamId}`, payload)
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
