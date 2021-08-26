import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { useUserId } from 'components/providers/AuthProvider'
import { usePendingFriendsQuery } from 'api/hooks/friends/queries/usePendingFriendsQuery'
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
      showAcceptButton
      {...props}
    />
  )
}

export default PendingFriendsList
