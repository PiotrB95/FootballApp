import { LastGame } from './LastGame'
import { TopTeams } from './TopTeams'
import { TotalGames } from './TotalGames'

export const StatsTab = () => {
  return (
    <div>
      <hr />
      <LastGame />
      <TotalGames />
      <TopTeams />
    </div>
  )
}
