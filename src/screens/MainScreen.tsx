import { Box } from '@chakra-ui/react'
import { RecentTracks } from 'components/data/RecentTracks/RecentTracks'
import { TopsSet } from 'components/data/Tops/TopsSet'
import { NavBar } from 'components/navigation/NavBar'

const MainScreen = (): JSX.Element => (
  <div>
    <NavBar />
    <Box width="100%" overflowX="hidden">
      <RecentTracks margin="50px 50px 0 50px" />
      <TopsSet />
    </Box>
  </div>
)

export { MainScreen }
