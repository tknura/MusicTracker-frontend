import { Stack, StackDivider, Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import countBy from 'lodash/countBy'

import { useTopArtistsMedTerm } from 'api/spotify/personalization'
import { TopGenreArea } from './TopGenreArea'

enum Mode { MORE, LESS }

const TopGenres = (): JSX.Element => {
  const { data } = useTopArtistsMedTerm()
  const { t } = useTranslation()
  const [itemsToShow, setItemsToShow] = useState(15)
  const [mode, setMode] = useState<Mode>(Mode.LESS)

  const genreArray = Object.entries(
    countBy(data?.items.flatMap(artist => artist.genres))
  ).sort((a, b) => b[1] - a[1])

  const showMore = () => {
    mode === Mode.LESS ? setItemsToShow(30) : setItemsToShow(15)
    mode === Mode.LESS ? setMode(Mode.MORE) : setMode(Mode.LESS)
  }

  return (
    <Stack
      divider={<StackDivider borderColor="gray.700" />}
      minW={500}
      paddingTop={35}
    >
      <Text fontSize="4xl">
        {t('screens.main.topGenres')}
      </Text>
      {genreArray?.length !== 0 ? (
        genreArray?.slice(0, itemsToShow).map((row) => (
          <TopGenreArea
            key={row[0]}
            name={row[0]}
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

export { TopGenres }
