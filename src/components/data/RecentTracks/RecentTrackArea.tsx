import { Stack, Image, Link, Text, HStack } from '@chakra-ui/react'
// eslint-disable-next-line import/no-duplicates
import { formatDistance } from 'date-fns'
// eslint-disable-next-line import/no-duplicates
import { pl } from 'date-fns/locale'
import { useTranslation } from 'react-i18next'
import { FacebookShareButton, TwitterShareButton } from 'react-share'

import GeniusLogo from 'assets/genius_logo.png'
import { useTrack } from 'api/hooks/spotify/tracks/useTrack'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

interface RecentTrackAreaProps {
  artist: string
  track: string
  id: string
  time: Date
  isCurrent: boolean
}

const RecentTrackArea = ({
  artist,
  track,
  id,
  time,
  isCurrent
}: RecentTrackAreaProps): JSX.Element => {
  const { t, i18n } = useTranslation()
  const timeDistance = i18n.language === 'pl' ? formatDistance(new Date(), time, { locale: pl }) : formatDistance(new Date(), time)

  const { data } = useTrack(id)

  const { data: geniusData } = useSearch(`${artist} ${track}`)
  let geniusPath = 'http://genius.com'
  if (geniusData?.response.hits.length !== 0) {
    geniusPath += geniusData?.response.hits[0].result.path
  }

  return (
    <Stack
      direction="row"
      align="center"
      position="relative"
    >
      <Image
        boxSize="60px"
        src={data?.album.images[0].url}
        alt=""
        mr={8}
      />
      <Stack
        direction={['column', 'row']}
        justify="space-between"
        w="100%"
      >
        <Stack
          direction={['column', 'row']}
          align="baseline"
        >
          <Link
            fontSize="xl"
            href={data?.external_urls.spotify}
            color={isCurrent ? 'secondary.900' : 'default'}
            as="b"
          >
            {track}
          </Link>
          <Link
            fontSize="md"
            href={data?.artists[0].external_urls.spotify}
            color={isCurrent ? 'secondary.900' : 'default'}
          >
            {artist}
          </Link>
        </Stack>
        <HStack spacing="5">
          <FacebookShareButton url={data?.external_urls.spotify || ''}>
            <FaFacebook />
          </FacebookShareButton>
          <TwitterShareButton url={data?.external_urls.spotify || ''}>
            <FaTwitter />
          </TwitterShareButton>
          <Text
            minWidth="100px"
            textAlign="right"
            fontSize="sm"
            color={isCurrent ? 'secondary.900' : 'default'}
          >
            {isCurrent ? t('screens.main.playingNow') : `${timeDistance} ${t('screens.main.ago')}`}
          </Text>
        </HStack>
      </Stack>
    </Stack>
  )
}

export { RecentTrackArea }
