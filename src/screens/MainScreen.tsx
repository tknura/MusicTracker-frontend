import { Box } from '@chakra-ui/react'
import { RecentTracks } from 'components/data/RecentTracks/RecentTracks'
import { TopsSet } from 'components/data/Tops/TopsSet'
import { NavBar } from 'components/navigation/NavBar'

const MainScreen = (): JSX.Element => (
  <div>
    <NavBar />
    <Box>
      <RecentTracks />
      <TopsSet />
    </Box>
  </div>
)

export { MainScreen }
