import { Stack, StackDivider, Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

import { LONG, MEDIUM, SHORT } from 'constants/timeRanges'
import { TimeRangeSelect } from 'components/data/TimeRangeSelect/TimeRangeSelect'
import { useTopArtists } from 'api/spotify/personalization'
import { TopArtistArea } from './TopArtistArea'

enum Mode { MORE, LESS }

const TopArtists = (): JSX.Element => {
  const { data: longTermData } = useTopArtists(LONG)
  const { data: mediumTermData } = useTopArtists(MEDIUM)
  const { data: shortTermData } = useTopArtists(SHORT)
  const [data, setData] = useState(shortTermData)
  const { t } = useTranslation()
  const [itemsToShow, setItemsToShow] = useState(8)
  const [mode, setMode] = useState<Mode>(Mode.LESS)

  const handleChange = (e :React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case SHORT: setData(shortTermData); break
      case MEDIUM: setData(mediumTermData); break
      case LONG: setData(longTermData); break
      default: break
    }
  }

  useEffect(() => (
    setData(shortTermData)
  ), [shortTermData])

  const showMore = () => {
    mode === Mode.LESS ? setItemsToShow(20) : setItemsToShow(8)
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
        <Text
          fontSize="xl"
          maxW="60%"
          as="b"
        >
          {t('screens.main.topArtists')}
        </Text>
        <TimeRangeSelect onChange={handleChange} />
      </Stack>
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

export { TopArtists }
