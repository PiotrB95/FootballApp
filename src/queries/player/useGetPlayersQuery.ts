import { useQuery } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { PlayerEntity } from '../../types'

export const useGetPlayersQuery = () => {
  const { apiGet } = useApi()

  const { data, isFetching } = useQuery<PlayerEntity[]>({
    queryKey: ['players'],
    queryFn: async () => {
      return apiGet<PlayerEntity[]>('players')
    },
  })

  return {
    data,
    isFetching,
  }
}
