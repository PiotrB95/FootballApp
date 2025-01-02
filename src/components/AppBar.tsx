import { ModeName, TabName } from '../types/enums'

type AppBarProps = {
  setTab: (name: TabName) => void
  setThemeMode: (name: ModeName) => void
  themeMode: ModeName
}

export const AppBar = ({ setTab, setThemeMode, themeMode }: AppBarProps) => {
  return (
    <div>
      <button onClick={() => setTab(TabName.Players)}>Gracze</button>
      <button onClick={() => setTab(TabName.Teams)}>Drużyny</button>
      <button onClick={() => setTab(TabName.Games)}>Rozgrywki</button>
      <button onClick={() => setTab(TabName.Stats)}>Statystyki</button>
      {themeMode === ModeName.Light ? (
        <button onClick={() => setThemeMode(ModeName.Dark)}>
          Włącz tryb ciemny
        </button>
      ) : (
        <button onClick={() => setThemeMode(ModeName.Light)}>
          Włączy tryb jasny
        </button>
      )}
    </div>
  )
}
