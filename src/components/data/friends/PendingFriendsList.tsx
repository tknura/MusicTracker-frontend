import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Skeleton } from '@chakra-ui/react'

import { useUserId } from 'components/providers/AuthProvider'
import { usePendingFriendsQuery } from 'api/hooks/friends/queries/usePendingFriendsQuery'
import { FriendsList, FriendsListProps } from './FriendsList/FriendsList'

const PendingFriendsList = (props: FriendsListProps): JSX.Element => {
  const { t } = useTranslation()
  const userId = useUserId()

  const { data: pendingFriendsData, isLoading } = usePendingFriendsQuery({ userId: userId || -1 })

  const pendingFriendsList = useMemo(() => (
    pendingFriendsData?.map((friend) => ({
      id: friend.friendship_id,
      name: friend.from
    }))
  ), [pendingFriendsData])

  return (
    <Skeleton isLoaded={!isLoading}>
      <FriendsList
        items={pendingFriendsList}
        emptyListText={t('screens.friends.pendingListEmpty')}
        showAcceptButton
        {...props}
      />
    </Skeleton>
  )
}

export default PendingFriendsList
