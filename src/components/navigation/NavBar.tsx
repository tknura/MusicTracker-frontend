import { Flex, IconButton } from '@chakra-ui/react'
import { APP_CONNECTION_ROUTE } from 'constants/routeNames'
import { FaRegSun } from 'react-icons/fa'
import { useHistory } from 'react-router'

const NavBar = (): JSX.Element => {
  const history = useHistory()

  return (
    <Flex justify="flex-end" m={5}>
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
