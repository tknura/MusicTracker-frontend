import { Stack, StackDivider, Text, Button, Image, Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { useRecentlyPlayedTracks, useCurrentlyPlaying } from 'api/spotify/player'
import { RecentTrackArea } from 'components/data/RecentTracks/RecentTrackArea'

enum Mode { MORE, LESS }

const RecentTracks = (): JSX.Element => {
  const { data } = useRecentlyPlayedTracks()
  const { data: currentlyPlayingResponse } = useCurrentlyPlaying()
  const currentTrack = currentlyPlayingResponse?.currently_playing_type === 'track' ? currentlyPlayingResponse.item as SpotifyApi.TrackObjectFull : null
  const { t } = useTranslation()
  const [itemsToShow, setItemsToShow] = useState(8)
  const [mode, setMode] = useState<Mode>(Mode.LESS)

  const showMore = () => {
    mode === Mode.LESS ? setItemsToShow(20) : setItemsToShow(8)
    mode === Mode.LESS ? setMode(Mode.MORE) : setMode(Mode.LESS)
  }
  return (
    <Stack
      divider={<StackDivider borderColor="gray.700" />}
      margin="50px 50px 0 50px"
    >
      <Text fontSize="6xl">
        {t('screens.main.recentTracks')}
      </Text>
      {currentlyPlayingResponse?.is_playing ? (
        <Stack
          direction="row"
          align="center"
        >
          <Image
            boxSize="60px"
            src={currentTrack?.album.images[0].url}
            alt=""
            mr={8}
          />
          <Stack direction="row" maxW="55%">
            <Link fontSize="lg" href={currentTrack?.artists[0].external_urls.spotify} color="secondary.900" as="b">
              {currentTrack?.artists[0].name}
            </Link>
            <Text fontSize="lg" color="secondary.900">
              {' - '}
            </Text>
            <Link fontSize="lg" href={currentTrack?.external_urls.spotify} color="secondary.900" as="b">
              {currentTrack?.name}
            </Link>
          </Stack>
          <Text fontSize="lg" pos="absolute" right="5%" maxW="20%" color="secondary.900" as="b">
            {t('screens.main.playingNow')}
          </Text>
        </Stack>
      ) : (
        null
      )}
      {data?.items.length !== 0 ? (
        data?.items.slice(0, itemsToShow).map((row) => (
          <RecentTrackArea
            key={row.played_at}
            artist={row.track.artists[0].name}
            track={row.track.name}
            id={row.track.id}
            time={new Date(row.played_at)}
          />
        )))
        : (
          <Text fontSize="lg">
            {t('screens.main.empty')}
          </Text>
        )}
      <Button variant="link" onClick={showMore}>
        {mode === Mode.LESS ? (
          t('screens.main.showMore')
        ) : (
          t('screens.main.showLess')
        )}
      </Button>
    </Stack>
  )
}

export { RecentTracks }
