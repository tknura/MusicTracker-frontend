import { Box, BoxProps, Flex } from '@chakra-ui/react'

import { BackButton } from 'components/ui/BackButton'
import { FriendsArea } from 'components/data/friends/FriendsArea'
import { MessagesArea } from 'components/data/MessagesArea/MessagesArea'
import { RouteContainer } from 'components/navigation/RouteContainer'

const FriendsScreen = (props: BoxProps): JSX.Element => (
  <RouteContainer>
    <Box w="100%" h="97vh" p="5" {...props}>
      <BackButton />
      <Flex w="100%" h="100%">
        <FriendsArea w="50%" overflowY="auto" mt="5" mr="5" />
        <MessagesArea w="50%" overflowY="auto" mt="5" ml="5" />
      </Flex>
    </Box>
  </RouteContainer>
)

export { FriendsScreen }
