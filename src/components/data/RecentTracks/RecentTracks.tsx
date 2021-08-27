import { Stack, StackDivider, Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState, useMemo } from 'react'

import { useRecentlyPlayedTracks } from 'api/hooks/spotify/player/useRecentlyPlayedTracks'
import { useCurrentlyPlaying } from 'api/hooks/spotify/player/useCurrentlyPlaying'
import { RecentTrackArea } from 'components/data/RecentTracks/RecentTrackArea'

enum Mode { MORE, LESS }

const RecentTracks = (): JSX.Element => {
  const { t } = useTranslation()
  const [itemsToShow, setItemsToShow] = useState(8)
  const [mode, setMode] = useState<Mode>(Mode.LESS)

  const { data } = useRecentlyPlayedTracks()

  const { data: currentlyPlayingResponse } = useCurrentlyPlaying()
  const currentTrack = useMemo(() =>
    currentlyPlayingResponse?.currently_playing_type === 'track'
      ? currentlyPlayingResponse.item as SpotifyApi.TrackObjectFull
      : null, [currentlyPlayingResponse])

  const showMore = () => {
    mode === Mode.LESS ? setItemsToShow(20) : setItemsToShow(8)
    mode === Mode.LESS ? setMode(Mode.MORE) : setMode(Mode.LESS)
  }

  return (
    <Stack
      divider={<StackDivider borderColor="gray.700" />}
      margin="50px 50px 0 50px"
    >
      <Text
        fontSize="4xl"
        as="b"
      >
        {t('screens.main.recentTracks')}
      </Text>
      {currentlyPlayingResponse?.is_playing ? (
        <RecentTrackArea
          artist={currentTrack?.artists[0].name || ''}
          track={currentTrack?.name || ''}
          id={currentTrack?.id || ''}
          time={new Date()}
          isCurrent
        />
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
            isCurrent={false}
          />
        )))
        : (
          <Text fontSize="lg">
            {t('screens.main.empty')}
          </Text>
        )}
      <Button
        variant="link"
        onClick={showMore}
      >
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
