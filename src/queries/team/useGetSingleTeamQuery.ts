import { useQuery } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { TeamEntity } from '../../types/team'

export const useGetSingleTeamQuery = (teamId: string | null) => {
  const { apiGet } = useApi()

  const { data, isFetching } = useQuery<TeamEntity>({
    queryKey: ['teams', teamId],
    queryFn: async () => {
      return apiGet<TeamEntity>(`teams/${teamId}`)
    },
    enabled: !!teamId,
  })

  return {
    data,
    isFetching,
  }
}
