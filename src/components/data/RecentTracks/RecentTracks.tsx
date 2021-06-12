import { Stack, StackDivider, Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { useRecentlyPlayedTracks } from 'api/spotify/player'
import { RecentTrackArea } from 'components/data/RecentTracks/RecentTrackArea'

enum Mode { MORE, LESS }

const RecentTracks = (): JSX.Element => {
  const { data } = useRecentlyPlayedTracks()
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
      m={50}
    >
      <Text fontSize="6xl">
        {t('screens.main.recentTracks')}
      </Text>
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
