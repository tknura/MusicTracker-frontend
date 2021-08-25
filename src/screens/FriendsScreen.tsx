import { useTranslation } from 'react-i18next'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text
} from '@chakra-ui/react'
import { FaArrowLeft, FaCheck, FaTimes } from 'react-icons/fa'

import { RouteContainer } from 'components/navigation/RouteContainer'
import { useHistory } from 'react-router'
import { TextField } from 'components/ui/TextField'

const FriendsScreen = () => {
  const { t } = useTranslation()
  const history = useHistory()

  return (
    <RouteContainer>
      <Box w="100%" p={5}>
        <Button leftIcon={<FaArrowLeft />} onClick={() => history.goBack()}>
          {t('common.back')}
        </Button>
        <Text fontSize="6xl">
          {t('common.friends')}
        </Text>
        <Flex alignItems="flex-end">
          <TextField label={t('screens.friends.friendUsername')} />
          <Button colorScheme="primary" ml={5}>
            Add Friend
          </Button>
        </Flex>
        <Accordion mt={5} defaultIndex={[0, 1]} allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Flex>
                <Heading fontSize="md">
                  {t('screens.friends.pendingList')}
                </Heading>
              </Flex>
              <Spacer />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <HStack spacing={2}>
                <Text>
                  {t('screens.friends.list')}
                </Text>
                <IconButton
                  size="sm"
                  colorScheme="green"
                  aria-label="accept"
                  icon={<FaCheck />}
                />
                <IconButton
                  size="sm"
                  colorScheme="red"
                  aria-label="decline"
                  icon={<FaTimes />}
                />
              </HStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Flex>
                <Heading fontSize="md">
                  {t('screens.friends.list')}
                </Heading>
              </Flex>
              <Spacer />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <HStack>
                <Text>
                  XD
                </Text>
                <Badge ml={2} colorScheme="primary">
                  {t('screens.friends.pending')}
                </Badge>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </RouteContainer>
  )
}

export { FriendsScreen }
