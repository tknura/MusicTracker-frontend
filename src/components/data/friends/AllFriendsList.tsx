import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { useFriendsQuery } from 'api/hooks/friends/queries/useFriendsQuery'
import { useUserId } from 'components/providers/AuthProvider'
import { FriendsList, FriendsListProps } from './FriendsList/FriendsList'

const AllFriendsList = (props: FriendsListProps): JSX.Element => {
  const { t } = useTranslation()
  const userId = useUserId()

  const { data: friendsData } = useFriendsQuery({ userId: userId || 0 })
  const friendsList = useMemo(() => (
    friendsData?.map(friend => ({
      id: friend.friend_id,
      name: friend.friend_name
    }))
  ), [friendsData])

  return (
    <FriendsList
      items={friendsList}
      emptyListText={t('screens.friends.listEmpty')}
      {...props}
    />
  )
}

export { AllFriendsList }
