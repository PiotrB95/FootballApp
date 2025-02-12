import { useEffect, useState } from 'react'
import { useGetGamesQuery } from '../../queries/game/useGetGamesQuery'
import { useGetTeamsQuery } from '../../queries/team/useGetTeamsQuery'
import { TeamEntity } from '../../types/team'

interface TeamGoals {
  [teamId: string]: number
}

interface TeamEntityWithScore extends TeamEntity {
  score: number
}

export const TopTeams = () => {
  const { data: teams, isFetching: teamsFetching } = useGetTeamsQuery()
  const { data: games, isFetching: gamesFetching } = useGetGamesQuery()
  const [topTeams, setTopTeams] = useState<TeamEntityWithScore[]>([])

  useEffect(() => {
    if (teams && games) {
      const teamsScores: TeamGoals = teams.reduce((acc, team) => {
        acc[team.id] = 0
        return acc
      }, {} as TeamGoals)

      games.forEach((game) => {
        if (
          game.teamA &&
          game.teamB &&
          game.scoreTeamA !== undefined &&
          game.scoreTeamB !== undefined
        ) {
          if (teamsScores[game.teamA] !== undefined) {
            teamsScores[game.teamA] += game.scoreTeamA
          }
          if (teamsScores[game.teamB] !== undefined) {
            teamsScores[game.teamB] += game.scoreTeamB
          }
        }
      })

      const updatedTeams = teams.map((team) => {
        const teamScore = teamsScores[team.id] || 0
        return {
          ...team,
          score: teamScore,
        }
      })

      const sortedTeams = updatedTeams.sort((a, b) => b.score - a.score)

      setTopTeams(sortedTeams.slice(0, 3))
    }
  }, [teams, games])

  if (teamsFetching || gamesFetching) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Top 3 teams with the most goals:</h2>
      {topTeams.map((team, index) => (
        <div key={team.id}>
          <p>
            {index + 1}. {team.name} - {team.score}
          </p>
        </div>
      ))}
    </div>
  )
}
