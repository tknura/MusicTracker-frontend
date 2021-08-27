import { Box } from '@chakra-ui/react'
import { BackButton } from 'components/common/BackButton'
import { FriendsArea } from 'components/data/friends/FriendsArea'
import { RouteContainer } from 'components/navigation/RouteContainer'

const FriendsScreen = (): JSX.Element => (
  <RouteContainer>
    <Box w="100%" p={5}>
      <BackButton />
      <FriendsArea w="50%" mt={5} />
    </Box>
  </RouteContainer>
)

export { FriendsScreen }
