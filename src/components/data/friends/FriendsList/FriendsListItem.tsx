import { ReactNode } from 'react'
import { HStack, StackProps, Text } from '@chakra-ui/react'

interface FriendListItemType {
  id: number
  name: string
}

interface FriendsListItemProps extends StackProps {
  name: string
  endComponent?: ReactNode
}

const FriendsListItem = ({
  name,
  endComponent,
  ...props
}: FriendsListItemProps): JSX.Element => (
  <HStack spacing={2} {...props}>
    <Text>
      {name}
    </Text>
    {endComponent}
  </HStack>
)

export { FriendsListItem }
export type { FriendListItemType }
