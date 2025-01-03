import { AppBar } from './components/AppBar'
import { useState } from 'react'
import { ModeName, TabName } from './types/enums'
import { PlayersTab } from './components/players/PlayersTab'
import { GamesTab } from './components/games/GamesTab'
import { StatsTab } from './components/stats/StatsTab'
import { TeamsTab } from './components/teams/TeamsTab'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 20px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
  }
`

export const App = () => {
  const [tab, setTab] = useState<TabName>(TabName.Players)
  const [themeMode, setThemeMode] = useState<ModeName>(ModeName.Light)

  const light = {
    colors: {
      primary: '#0333EE',
      textPrimary: '#388E3C',
      background: '#F5F5F5',
      buttonBackground: ' #F5F5F5',
      buttonText: '#388E3C',
      buttonBorder: '#4CAF50',
      graphDiv: '#388E3C',
      buttonHoverBackgroud: '#A5D6A7',
      buttonHoverColor: '#2E7D32',
    },
  }

  const dark = {
    colors: {
      primary: '#0333EE',
      textPrimary: '#4CAF50',
      background: '#121212',
      buttonBackground: '#121212',
      buttonText: '#fff',
      buttonBorder: '#4CAF50',
      graphDiv: '#4CAF50',
      buttonHoverBackgroud: '#1E4620',
      buttonHoverColor: '#FFFFFF',
    },
  }

  return (
    <ThemeProvider theme={themeMode === ModeName.Light ? light : dark}>
      <GlobalStyle />
      <AppBar
        setTab={setTab}
        setThemeMode={setThemeMode}
        themeMode={themeMode}
      />
      {tab === TabName.Players ? <PlayersTab /> : null}
      {tab === TabName.Teams ? <TeamsTab /> : null}
      {tab === TabName.Games ? <GamesTab /> : null}
      {tab === TabName.Stats ? <StatsTab /> : null}
    </ThemeProvider>
  )
}
