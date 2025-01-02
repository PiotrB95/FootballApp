import { useQuery } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { GameEntity } from '../../types'

export const useGetGamesQuery = () => {
  const { apiGet } = useApi()

  const { data, isFetching } = useQuery<GameEntity[]>({
    queryKey: ['games'],
    queryFn: async () => {
      return apiGet<GameEntity[]>('games')
    },
  })

  return {
    data,
    isFetching,
  }
}
