import { ModeName, TabName } from '../types/enums'
import { MenuButton } from './styled/MenuButton'
import { MenuDiv } from './styled/MenuDiv'

type AppBarProps = {
  setTab: (name: TabName) => void
  setThemeMode: (name: ModeName) => void
  themeMode: ModeName
}

export const AppBar = ({ setTab, setThemeMode, themeMode }: AppBarProps) => {
  return (
    <MenuDiv>
      <div>
        <MenuButton label={'Players'} onClick={() => setTab(TabName.Players)} />
        <MenuButton label={'Teams'} onClick={() => setTab(TabName.Teams)} />
        <MenuButton label={'Games'} onClick={() => setTab(TabName.Games)} />
        <MenuButton label={'Stats'} onClick={() => setTab(TabName.Stats)} />
      </div>
      <div>
        {themeMode === ModeName.Light ? (
          <MenuButton
            label={'Dark Mode Off'}
            onClick={() => setThemeMode(ModeName.Dark)}
          />
        ) : (
          <MenuButton
            label={'Dark Mode On'}
            onClick={() => setThemeMode(ModeName.Light)}
          />
        )}
      </div>
    </MenuDiv>
  )
}
