import { Stack, StackDivider, Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import countBy from 'lodash/countBy'

import { LONG, MEDIUM, SHORT } from 'constants/timeRanges'
import { TimeRangeSelect } from 'components/data/TimeRangeSelect/TimeRangeSelect'
import { useTopArtists } from 'api/spotify/personalization'
import { TopGenreArea } from './TopGenreArea'

enum Mode { MORE, LESS }

const TopGenres = (): JSX.Element => {
  const { data: longTermData } = useTopArtists(LONG)
  const { data: mediumTermData } = useTopArtists(MEDIUM)
  const { data: shortTermData } = useTopArtists(SHORT)
  const [data, setData] = useState(shortTermData)
  const { t } = useTranslation()
  const [itemsToShow, setItemsToShow] = useState(15)
  const [mode, setMode] = useState<Mode>(Mode.LESS)

  const genreArray = Object.entries(
    countBy(data?.items.flatMap(artist => artist.genres))
  ).sort((a, b) => b[1] - a[1])

  const handleChange = (e :React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case LONG: setData(shortTermData); break
      case MEDIUM: setData(mediumTermData); break
      case SHORT: setData(longTermData); break
      default: break
    }
  }

  useEffect(() => (
    setData(shortTermData)
  ), [shortTermData])

  const showMore = () => {
    mode === Mode.LESS ? setItemsToShow(30) : setItemsToShow(15)
    mode === Mode.LESS ? setMode(Mode.MORE) : setMode(Mode.LESS)
  }

  return (
    <Stack
      divider={<StackDivider borderColor="gray.700" />}
      margin="0 50px"
      paddingTop={35}
    >
      <Stack
        direction="row"
        align="center"
        justify="space-between"
      >
        <Text fontSize="xl" maxW="60%" as="b">
          {t('screens.main.topGenres')}
        </Text>
        <TimeRangeSelect onChange={handleChange} />
      </Stack>
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

export { TopGenres }
