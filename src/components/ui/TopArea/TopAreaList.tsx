import { Stack, StackDivider, StackProps, Text } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ShowMoreToggle } from '../ShowMoreToggle'
import { TopAreaItemType } from './TopAreaItem'

interface TopAreaListProps<T> extends StackProps {
  list?: T[]
  renderItem: (item: T) => ReactNode
  emptyText?: string
  lessItemsToShow?: number
  moreItemsToShow?: number
}

const TopAreaList = <T extends TopAreaItemType>({
  list = [],
  renderItem,
  emptyText,
  lessItemsToShow = 8,
  moreItemsToShow = 20,
  ...props
}: TopAreaListProps<T>) => {
  const { t } = useTranslation()
  const [itemsToShow, setItemsToShow] = useState<number>(lessItemsToShow)

  return (
    <Stack {...props}>
      {list?.length !== 0 ? (
        <>
          <Stack divider={<StackDivider borderColor="gray.700" />}>
            {list?.slice(0, itemsToShow).map(renderItem)}
            <ShowMoreToggle
              onShowLess={() => setItemsToShow(lessItemsToShow)}
              onShowMore={() => setItemsToShow(moreItemsToShow)}
            />
          </Stack>
        </>
      ) : (
        <Text fontSize="lg">
          {emptyText || t('screens.main.empty')}
        </Text>
      )}
    </Stack>
  )
}

export { TopAreaList }
