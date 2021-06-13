import { Stack, StackDivider, Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { useTopTracksMedTerm } from 'api/spotify/personalization'
import { TopTrackArea } from './TopTrackArea'

enum Mode { MORE, LESS }

const TopTracks = (): JSX.Element => {
  const { data } = useTopTracksMedTerm()
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
      minW={500}
      paddingTop={35}
    >
      <Text fontSize="4xl">
        {t('screens.main.topTracks')}
      </Text>
      {data?.items.length !== 0 ? (
        data?.items.slice(0, itemsToShow).map((row) => (
          <TopTrackArea
            key={row.id}
            title={row.name}
            cover={row.album?.images[0].url}
            url={row.external_urls.spotify}
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

export { TopTracks }
