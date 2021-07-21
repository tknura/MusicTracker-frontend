import { Stack, StackDivider, Text, Button, Select } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

import { useTopArtistsLongTerm, useTopArtistsMediumTerm, useTopArtistsShortTerm } from 'api/spotify/personalization'
import { TopArtistArea } from './TopArtistArea'

enum Mode { MORE, LESS }

const TopArtists = (): JSX.Element => {
  const { data: longTermData } = useTopArtistsLongTerm()
  const { data: mediumTermData } = useTopArtistsMediumTerm()
  const { data: shortTermData } = useTopArtistsShortTerm()
  const [data, setData] = useState(shortTermData)
  const { t } = useTranslation()
  const [itemsToShow, setItemsToShow] = useState(8)
  const [mode, setMode] = useState<Mode>(Mode.LESS)

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
    mode === Mode.LESS ? setItemsToShow(20) : setItemsToShow(8)
    mode === Mode.LESS ? setMode(Mode.MORE) : setMode(Mode.LESS)
  }
  return (
    <Stack
      divider={<StackDivider borderColor="gray.700" />}
      w={500}
      paddingTop={35}
    >
      <Stack direction="row" justifyContent="space-between">
        <Text fontSize="4xl" maxW="80%">
          {t('screens.main.topArtists')}
        </Text>
        <Select size="lg" variant="flushed" maxW="30%" top="30%" defaultValue="s" placeholder={t('screens.main.chooseTime')} onChange={handleChange}>
          <option value="s">{t('screens.main.fourWeeks')}</option>
          <option value="m">{t('screens.main.sixMonths')}</option>
          <option value="l">{t('screens.main.allTime')}</option>
        </Select>
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
