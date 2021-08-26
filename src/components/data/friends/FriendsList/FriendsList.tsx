import { ReactNode } from 'react'
import { StackProps, Text, VStack } from '@chakra-ui/react'

import { FriendListItemType, FriendsListItem } from './FriendsListItem'

interface FriendsListProps extends StackProps {
  items?: FriendListItemType[]
  endComponent?: ReactNode
  emptyListText?: string
}

const FriendsList = ({
  items = [],
  endComponent,
  emptyListText,
}: FriendsListProps): JSX.Element => (
  <VStack>
    {items.length ? (
      items.map((item) => (
        <FriendsListItem
          key={item.id}
          name={item.name}
          endComponent={endComponent}
        />
      ))
    ) : (
      <Text>
        {emptyListText}
      </Text>
    )}
  </VStack>
)

export { FriendsList }
export type { FriendsListProps }
