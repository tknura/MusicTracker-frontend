import { Skeleton } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

import { LONG, MEDIUM, SHORT } from 'constants/timeRanges'
import { useTopTracks } from 'api/spotify/personalization'
import { TopArea, TopAreaProps } from 'components/ui/TopArea/TopArea'

const TopTracksArea = (props: TopAreaProps): JSX.Element => {
  const { t } = useTranslation()

  const { data: longTermData, isLoading: isLongLoading } = useTopTracks(LONG)
  const { data: mediumTermData, isLoading: isMediumLoading } = useTopTracks(MEDIUM)
  const { data: shortTermData, isLoading: isShortLoading } = useTopTracks(SHORT)
  const isLoading = isLongLoading || isMediumLoading || isShortLoading

  const [data, setData] = useState(shortTermData)

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

  return (
    <TopArea {...props}>
      <TopArea.Heading
        heading={t('screens.main.topTracks')}
        onTimeRangeChange={handleChange}
      />
      <Skeleton isLoaded={!isLoading}>
        <TopArea.List
          list={data?.items}
          renderItem={(item) => (
            <TopArea.ListItem
              key={item.id}
              name={item.name}
              photo={item.album?.images[0].url}
              url={item.external_urls.spotify}
            />
          )}
        />
      </Skeleton>
    </TopArea>
  )
}

export { TopTracksArea }
