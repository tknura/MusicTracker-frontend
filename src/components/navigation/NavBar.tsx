import { Badge, Button, Flex, FlexProps, HStack, IconButton, Spacer, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FaRegSun, FaUserFriends } from 'react-icons/fa'
import { useHistory } from 'react-router'

import { APP_CONNECTION_ROUTE, FRIENDS_ROUTE } from 'constants/routeNames'
import { useGetMessagesQuery } from 'api/hooks/messages/queries/useGetMessagesQuery'
import { useUserId } from 'components/providers/AuthProvider'
import { usePendingFriendsQuery } from 'api/hooks/friends/queries/usePendingFriendsQuery'

const NavBar = (props: FlexProps): JSX.Element => {
  const history = useHistory()
  const { t } = useTranslation()
  const userId = useUserId()

  const { data: messages } = useGetMessagesQuery({ userId: userId || -1 })
  const { data: pendingFriends } = usePendingFriendsQuery({ userId: userId || -1 })

  return (
    <Flex justify="flex-end" p={5} {...props}>
      <HStack>
        <Button
          leftIcon={<FaUserFriends />}
          onClick={() => history.push(FRIENDS_ROUTE)}
        >
          {`${t('common.friends')} ${t('common.and')} ${t('common.messages')}`}
        </Button>
        <VStack align="flex-start">
          <Badge colorScheme="primary" variant="outline">
            {`${messages?.length} ${t('common.messages')}`}
          </Badge>
          <Badge colorScheme="secondary" variant="outline">
            {`${pendingFriends?.length} ${t('screens.main.pendingFriends')}`}
          </Badge>
        </VStack>
      </HStack>
      <Spacer />
      <IconButton
        colorScheme="primary"
        aria-label="Search database"
        icon={<FaRegSun />}
        onClick={() => history.push(APP_CONNECTION_ROUTE)}
      />
    </Flex>
  )
}

export { NavBar }
