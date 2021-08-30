import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { Box } from '@chakra-ui/react'

import { RecentTracks } from 'components/data/RecentTracks/RecentTracks'
import { TopsSet } from 'components/data/Tops/TopsSet'
import { NavBar } from 'components/navigation/NavBar'
import { useSpotifyToken } from 'components/providers/AuthProvider'
import { APP_CONNECTION_ROUTE } from 'constants/routeNames'
import { useIsTokenRefreshing } from 'components/providers/SpotifyApiProvider'

const MainScreen = (): JSX.Element => {
  const history = useHistory()
  const spotifyToken = useSpotifyToken()
  const isTokenRefreshing = useIsTokenRefreshing()

  useEffect(() => {
    if (!spotifyToken && !isTokenRefreshing) {
      history.replace(APP_CONNECTION_ROUTE)
    }
  }, [history, isTokenRefreshing, spotifyToken])

  return (
    <div>
      <NavBar />
      <Box width="100%" overflowX="hidden">
        <RecentTracks margin="50px 50px 0 50px" />
        <TopsSet />
      </Box>
    </div>
  )
}
export { MainScreen }
