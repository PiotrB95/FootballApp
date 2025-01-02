import { useQuery } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { PlayerEntity } from '../../types'

export const useGetPlayersForTeamQuery = (teamId: string | number) => {
  const { apiGet } = useApi()

  const { data, isFetching } = useQuery<PlayerEntity[]>({
    queryKey: ['players', teamId],
    queryFn: async () => {
      return apiGet<PlayerEntity[]>(`players?teamId=${teamId}`)
    },
  })

  return {
    data,
    isFetching,
  }
}
