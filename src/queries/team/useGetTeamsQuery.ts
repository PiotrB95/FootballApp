import { useQuery } from "@tanstack/react-query"
import { useApi } from "../../hooks/useApi.ts";
import { TeamEntity } from "../../types/team";

export const useGetTeamsQuery = () => {
    const { apiGet } = useApi();

    const { data, isFetching } = useQuery<TeamEntity[]>({
        queryKey: ['teams'],
        queryFn: async() => {
            return apiGet<TeamEntity[]>('teams');
        }
    })

    return {
        data,
        isFetching
    }
}