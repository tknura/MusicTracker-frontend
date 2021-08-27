import { Stack } from '@chakra-ui/react'

import { TopArtistsArea } from './TopArtistsArea'
import { TopTracksArea } from './TopTracksArea'
import { TopGenresArea } from './TopGenresArea'

const TopsSet = (): JSX.Element => (
  <Stack direction="row" justify="space-evenly" wrap="wrap">
    <TopArtistsArea py="35px" mx="20" />
    <TopTracksArea py="35px" mx="20" />
    <TopGenresArea py="35px" mx="20" />
  </Stack>
)

export { TopsSet }
