import { Heading, Skeleton } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

import { useRecentlyPlayedTracks } from 'api/hooks/spotify/player/useRecentlyPlayedTracks'
import { useCurrentlyPlaying } from 'api/hooks/spotify/player/useCurrentlyPlaying'
import { RecentTrackArea } from 'components/data/RecentTracks/RecentTrackArea'
import { TopArea, TopAreaProps } from 'components/ui/TopArea/TopArea'

const RecentTracks = (props: TopAreaProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    data: recentlyPlayedData,
    isLoading: isRecentlyPlayedLoading
  } = useRecentlyPlayedTracks()
  const {
    data: currentlyPlayingResponse,
    isLoading: isCurrentlyPlayingLoading
  } = useCurrentlyPlaying()

  const recentlyPlayedTracks = useMemo(() => (
    recentlyPlayedData?.items.map(item => ({ name: item.track.name, ...item }))
  ), [recentlyPlayedData?.items])

  const currentTrack = useMemo(() => (
    currentlyPlayingResponse?.currently_playing_type === 'track'
      ? currentlyPlayingResponse.item as SpotifyApi.TrackObjectFull
      : null
  ), [currentlyPlayingResponse])

  return (
    <TopArea {...props}>
      <Heading fontSize="4xl">
        {t('screens.main.recentTracks')}
      </Heading>
      <Skeleton isLoaded={!isCurrentlyPlayingLoading}>
        {currentlyPlayingResponse?.is_playing && (
          <RecentTrackArea
            artist={currentTrack?.artists[0].name || ''}
            track={currentTrack?.name || ''}
            id={currentTrack?.id || ''}
            time={new Date()}
            isCurrent
          />
        )}
      </Skeleton>
      <Skeleton isLoaded={!isRecentlyPlayedLoading}>
        <TopArea.List
          list={recentlyPlayedTracks}
          renderItem={(item) => (
            <RecentTrackArea
              key={`${item.played_at}-${item.track.id}`}
              artist={item.track.artists[0].name}
              track={item.name}
              id={item.track.id}
              time={new Date(item.played_at)}
              isCurrent={false}
            />
          )}
        />
      </Skeleton>
    </TopArea>
  )
}

export { RecentTracks }
