import { RecentTracks } from 'components/data/RecentTracks/RecentTracks'
import { TopsSet } from 'components/data/Tops/TopsSet'

const MainScreen = (): JSX.Element => (
  <div>
    <RecentTracks />
    <TopsSet />
  </div>
)

export { MainScreen }
