import { BoxProps, Flex, Box } from '@chakra-ui/react'

import { BackButton } from 'components/ui/BackButton'
import { FriendsArea } from 'components/data/friends/FriendsArea'
import { MessagesArea } from 'components/data/MessagesArea/MessagesArea'
import { RouteContainer } from 'components/navigation/RouteContainer'

const FriendsScreen = (props: BoxProps): JSX.Element => (
  <RouteContainer>
    <Box w="100%" h="97vh" p="5" {...props}>
      <BackButton />
      <Flex direction={['column', 'row']} w="100%" h="100%">
        <FriendsArea
          minW="300px"
          w={['100%', '50%']}
          overflowY={['unset', 'auto']}
          mt="5"
          mr={[0, 5]}
        />
        <MessagesArea
          minW="300px"
          w={['100%', '50%']}
          overflowY={['unset', 'auto']}
          mt="5"
          ml={[0, 5]}
        />
      </Flex>
    </Box>
  </RouteContainer>
)

export { FriendsScreen }
