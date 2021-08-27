import { Skeleton } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import countBy from 'lodash/countBy'

import { LONG, MEDIUM, SHORT } from 'constants/timeRanges'
import { useTopArtists } from 'api/spotify/personalization'
import { TopArea, TopAreaProps } from 'components/ui/TopArea/TopArea'

const TopGenresArea = (props: TopAreaProps): JSX.Element => {
  const { t } = useTranslation()

  const { data: longTermData, isLoading: isLongLoading } = useTopArtists(LONG)
  const { data: mediumTermData, isLoading: isMediumLoading } = useTopArtists(MEDIUM)
  const { data: shortTermData, isLoading: isShortLoading } = useTopArtists(SHORT)
  const isLoading = isLongLoading || isMediumLoading || isShortLoading

  const [data, setData] = useState(shortTermData)

  const genreArray = Object.entries(
    countBy(data?.items.flatMap(artist => artist.genres))
  ).sort((a, b) => b[1] - a[1]).map(([genre]) => ({ name: genre }))

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

  return (
    <TopArea {...props}>
      <TopArea.Heading
        heading={t('screens.main.topGenres')}
        onTimeRangeChange={handleChange}
      />
      <Skeleton isLoaded={!isLoading}>
        <TopArea.List
          list={genreArray}
          renderItem={(item) => (
            <TopArea.ListItem
              key={item.name}
              name={item.name}
            />
          )}
        />
      </Skeleton>
    </TopArea>
  )
}

export { TopGenresArea }
