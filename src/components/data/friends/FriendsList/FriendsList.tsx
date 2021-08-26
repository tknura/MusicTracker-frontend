import { ReactNode } from 'react'
import { IconButton, StackProps, Text, VStack } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'
import { useQueryClient } from 'react-query'

import { useAcceptFriendMutation } from 'api/hooks/friends/mutations/useAcceptFriend'
import { FRIENDS_QUERY_KEY } from 'api/hooks/friends/queries/useFriendsQuery'
import { PENDING_FRIENDS_QUERY_KEY } from 'api/hooks/friends/queries/usePendingFriendsQuery'
import { useUserId } from 'components/providers/AuthProvider'
import { FriendListItemType, FriendsListItem } from './FriendsListItem'

interface FriendsListProps extends StackProps {
  items?: FriendListItemType[]
  endComponent?: ReactNode
  emptyListText?: string
  showAcceptButton?: boolean
}

const FriendsList = ({
  items = [],
  endComponent,
  emptyListText,
  showAcceptButton,
}: FriendsListProps): JSX.Element => {
  const userId = useUserId()
  const queryClient = useQueryClient()
  const { mutate: acceptFriend } = useAcceptFriendMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(FRIENDS_QUERY_KEY)
      queryClient.invalidateQueries(PENDING_FRIENDS_QUERY_KEY)
    }
  })

  const handleAcceptFriend = (friendId: number) => () => {
    if (userId) {
      acceptFriend({ userId, friendshipId: friendId })
    }
  }

  return (
    <VStack alignItems="flex-start">
      {items.length ? (
        items.map((item) => (
          <FriendsListItem
            key={item.id}
            name={item.name}
            endComponent={
              <>
                {showAcceptButton && (
                  <IconButton
                    size="sm"
                    colorScheme="green"
                    aria-label="accept"
                    icon={<FaCheck />}
                    onClick={handleAcceptFriend(item.id)}
                  />)}
                {endComponent}
              </>
            }
          />
        ))
      ) : (
        <Text as="i">
          {emptyListText}
        </Text>
      )}
    </VStack>
  )
}

export { FriendsList }
export type { FriendsListProps }
