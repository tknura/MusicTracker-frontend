import { Stack, StackDivider, StackProps, Text } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ShowMoreToggle } from '../ShowMoreToggle'
import { TopAreaItemType } from './TopAreaItem'

interface TopAreaListProps<T> extends StackProps {
  list?: T[]
  renderItem: (item: T) => ReactNode
  emptyText?: string
}

const TopAreaList = <T extends TopAreaItemType>({
  list,
  renderItem,
  emptyText,
  ...props
}: TopAreaListProps<T>) => {
  const { t } = useTranslation()
  const [itemsToShow, setItemsToShow] = useState<number>(8)

  return (
    <Stack divider={<StackDivider borderColor="gray.700" />} {...props}>
      {list?.length !== 0 ? (
        list?.slice(0, itemsToShow).map(renderItem)
      ) : (
        <Text fontSize="lg">
          {emptyText || t('screens.main.empty')}
        </Text>
      )}
      <ShowMoreToggle
        onShowLess={() => setItemsToShow(8)}
        onShowMore={() => setItemsToShow(20)}
      />
    </Stack>
  )
}

export { TopAreaList }
