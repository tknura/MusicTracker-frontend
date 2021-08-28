import { Button, Flex, FlexProps, IconButton, Spacer } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FaRegSun, FaUserFriends } from 'react-icons/fa'
import { useHistory } from 'react-router'

import { APP_CONNECTION_ROUTE, FRIENDS_ROUTE } from 'constants/routeNames'

const NavBar = (props: FlexProps): JSX.Element => {
  const history = useHistory()
  const { t } = useTranslation()

  return (
    <Flex justify="flex-end" p={5} {...props}>
      <Button
        leftIcon={<FaUserFriends />}
        onClick={() => history.push(FRIENDS_ROUTE)}
      >
        {t('common.friends')}
      </Button>
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
