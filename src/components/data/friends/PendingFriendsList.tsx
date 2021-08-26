import { useMemo } from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import { usePendingFriendsQuery } from 'api/hooks/friends/queries/usePendingFriendsQuery'
import { useUserId } from 'components/providers/AuthProvider'
import { FriendsList, FriendsListProps } from './FriendsList/FriendsList'

const PendingFriendsList = (props: FriendsListProps): JSX.Element => {
  const { t } = useTranslation()
  const userId = useUserId()
  const { data: pendingFriendsData } = usePendingFriendsQuery({ userId: userId || 0 })

  const pendingFriendsList = useMemo(() => (
    pendingFriendsData?.map((friend) => ({
      id: friend.friendship_id,
      name: friend.from
    }))
  ), [pendingFriendsData])

  return (
    <FriendsList
      items={pendingFriendsList}
      emptyListText={t('screens.friends.pendingListEmpty')}
      endComponent={
        <>
          <IconButton
            size="sm"
            colorScheme="green"
            aria-label="accept"
            icon={<FaCheck />}
          />
          <IconButton
            size="sm"
            colorScheme="red"
            aria-label="decline"
            icon={<FaTimes />}
          />
        </>
      }
      {...props}
    />
  )
}

export default PendingFriendsList
