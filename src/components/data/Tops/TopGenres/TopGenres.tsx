import { Stack, StackDivider, Text, Button, Select } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import countBy from 'lodash/countBy'

import { useTopArtistsLongTerm } from 'api/hooks/spotify/personalization/useTopArtistsLongTerm'
import { useTopArtistsMediumTerm } from 'api/hooks/spotify/personalization/useTopArtistsMediumTerm'
import { useTopArtistsShortTerm } from 'api/hooks/spotify/personalization/useTopArtistsShortTerm'
import { TopGenreArea } from './TopGenreArea'

enum Mode { MORE, LESS }

const TopGenres = (): JSX.Element => {
  const { data: longTermData } = useTopArtistsLongTerm()
  const { data: mediumTermData } = useTopArtistsMediumTerm()
  const { data: shortTermData } = useTopArtistsShortTerm()
  const [data, setData] = useState(shortTermData)
  const { t } = useTranslation()
  const [itemsToShow, setItemsToShow] = useState(15)
  const [mode, setMode] = useState<Mode>(Mode.LESS)

  const genreArray = Object.entries(
    countBy(data?.items.flatMap(artist => artist.genres))
  ).sort((a, b) => b[1] - a[1])

  const handleChange = (e :React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case 's': setData(shortTermData); break
      case 'm': setData(mediumTermData); break
      case 'l': setData(longTermData); break
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
      w={500}
      paddingTop={35}
    >
      <Stack direction="row" justifyContent="space-between">
        <Text fontSize="4xl" maxW="60%">
          {t('screens.main.topGenres')}
        </Text>
        <Select size="lg" variant="flushed" maxW="30%" defaultValue="s" top="30%" placeholder={t('screens.main.chooseTime')} onChange={handleChange}>
          <option value="s">{t('screens.main.fourWeeks')}</option>
          <option value="m">{t('screens.main.sixMonths')}</option>
          <option value="l">{t('screens.main.allTime')}</option>
        </Select>
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
