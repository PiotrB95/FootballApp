import { LastGame } from './LastGame'
import { TopTeams } from './TopTeams'
import { TotalGames } from './TotalGames'

export const StatsTab = () => {
  return (
    <div>
      <LastGame />
      <TotalGames />
      <TopTeams />
    </div>
  )
}
