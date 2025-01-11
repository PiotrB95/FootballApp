import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi'
import { TeamEntity } from '../../types/team'

export const useDeleteTeamMutation = () => {
  const { apiDelete } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['teams', 'delete'],
    mutationFn: async (teamId: string) => {
      return apiDelete<TeamEntity>(`teams/${teamId}`)
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
