import { useEffect, useState } from 'react'
import { Button, Flex, FlexProps } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { TextField } from 'components/ui/TextField'
import { useUserId } from 'components/providers/AuthProvider'
import { useAddFriendMutation } from 'api/hooks/friends/mutations/useAddFriendMutation'
import { useGetByUsernameMutation } from 'api/hooks/friends/mutations/useGetByUsernameQuery'

interface Friend {
  login: string
  userId: number
}

const AddFriendField = (props: FlexProps) => {
  const { t } = useTranslation()
  const userId = useUserId()

  const [friendName, setFriendName] = useState<string>('')
  const [friendToAdd, setFriendToAdd] = useState<Friend | null>(null)

  const { mutateAsync: getFriendByUsername, isLoading } = useGetByUsernameMutation()
  const { mutate: addFriend } = useAddFriendMutation()

  const handleFriendNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFriendName(event.currentTarget.value)
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const foundUsers = await getFriendByUsername({ username: friendName })
      const friend = foundUsers?.[0]
        ? { login: foundUsers?.[0].login, userId: foundUsers?.[0].user_id }
        : null

      setFriendToAdd(friend)
    }, 250)

    return () => clearTimeout(delayDebounceFn)
  }, [friendName, getFriendByUsername])

  const handleAddFriendButton = () => {
    if (friendToAdd && userId) {
      addFriend({
        friendId: friendToAdd.userId,
        userId,
      })
    }
  }

  return (
    <Flex alignItems="flex-end" {...props}>
      <TextField
        onChange={handleFriendNameChange}
        label={t('screens.friends.friendUsername')}
        touched={!!friendName}
        errorMessage={!friendToAdd ? t('screens.friends.friendNotFound') : ''}
      />
      <Button
        colorScheme="primary"
        w="auto"
        paddingX="10"
        ml={5}
        disabled={!friendToAdd}
        isLoading={isLoading}
        onClick={handleAddFriendButton}
      >
        {t('screens.friends.addFriend')}
      </Button>
    </Flex>
  )
}

export { AddFriendField }
