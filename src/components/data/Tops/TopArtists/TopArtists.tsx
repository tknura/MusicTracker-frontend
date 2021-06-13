import { Stack, StackDivider, Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { useTopArtistsMedTerm } from 'api/spotify/personalization'
import { TopArtistArea } from './TopArtistArea'

enum Mode { MORE, LESS }

const TopArtists = (): JSX.Element => {
  const { data } = useTopArtistsMedTerm()
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
        {t('screens.main.topArtists')}
      </Text>
      {data?.items.length !== 0 ? (
        data?.items.slice(0, itemsToShow).map((row) => (
          <TopArtistArea
            key={row.uri}
            name={row.name}
            photo={row.images[0]?.url}
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

export { TopArtists }
