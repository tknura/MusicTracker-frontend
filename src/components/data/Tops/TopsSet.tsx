import { Stack } from '@chakra-ui/react'

import { TopArtists } from './TopArtists/TopArtists'
import { TopTracks } from './TopTracks/TopTracks'
import { TopGenres } from './TopGenres/TopGenres'

const TopsSet = (): JSX.Element => (
  <Stack direction="row" justify="space-evenly" wrap="wrap">
    <TopArtists />
    <TopTracks />
    <TopGenres />
  </Stack>
)

export { TopsSet }
