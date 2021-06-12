import { Stack, Image, Link, Text } from '@chakra-ui/react'
import { formatDistance } from 'date-fns'
import { pl } from 'date-fns/locale'
import { useTranslation } from 'react-i18next'

import { useTrack } from 'api/spotify/player'

interface RecentTrackAreaProps {
  artist: string
  track: string
  id: string
  time: Date
}

const RecentTrackArea = ({
  artist,
  track,
  id,
  time
}: RecentTrackAreaProps): JSX.Element => {
  const { data } = useTrack(id)
  const { t, i18n } = useTranslation()

  return (
    <Stack
      direction="row"
      align="center"
    >
      <Image
        boxSize="60px"
        src={data?.album.images[1].url}
        alt=""
        mr={10}
      />
      <Link fontSize="lg" href={data?.artists[0].external_urls.spotify}>
        {artist}
      </Link>
      <Text fontSize="lg">
        {' - '}
      </Text>
      <Link fontSize="lg" href={data?.external_urls.spotify}>
        {track}
      </Link>
      <Text fontSize="lg" pos="absolute" right="5%">
        {`${i18n.language === 'pl' ? formatDistance(new Date(), time, { locale: pl }) : formatDistance(new Date(), time)} ${t('screens.main.ago')}`}
      </Text>
    </Stack>
  )
}

export { RecentTrackArea }
