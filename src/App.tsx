import { AppBar } from './components/AppBar'
import { useState } from 'react'
import { ModeName, TabName } from './types/enums'
import { PlayersTab } from './components/players/PlayersTab'
import { GamesTab } from './components/games/GamesTab'
import { StatsTab } from './components/stats/StatsTab'
import { TeamsTab } from './components/teams/TeamsTab'

export const App = () => {
  const [tab, setTab] = useState<TabName>(TabName.Players)
  const [themeMode, setThemeMode] = useState<ModeName>(ModeName.Light)

  return (
    <div>
      <AppBar
        setTab={setTab}
        setThemeMode={setThemeMode}
        themeMode={themeMode}
      />
      {tab === TabName.Players ? <PlayersTab /> : null}
      {tab === TabName.Teams ? <TeamsTab /> : null}
      {tab === TabName.Games ? <GamesTab /> : null}
      {tab === TabName.Stats ? <StatsTab /> : null}
      {themeMode === ModeName.Dark ? <p>Dark</p> : <p>Light</p>}
    </div>
  )
}
