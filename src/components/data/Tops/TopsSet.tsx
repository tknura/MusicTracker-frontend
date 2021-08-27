import { Stack } from '@chakra-ui/react'

import { TopArtistsArea } from './TopArtistsArea'
import { TopTracksArea } from './TopTracksArea'
import { TopGenresArea } from './TopGenresArea'

const TopsSet = (): JSX.Element => (
  <Stack direction="row" justify="space-evenly" wrap="wrap">
    <TopArtistsArea py="35px" px="20px" />
    <TopTracksArea py="35px" px="20px" />
    <TopGenresArea py="35px" px="20px" />
  </Stack>
)

export { TopsSet }
