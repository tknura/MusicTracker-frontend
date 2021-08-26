import { useTranslation } from 'react-i18next'
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Box,
  Text
} from '@chakra-ui/react'

import { RouteContainer } from 'components/navigation/RouteContainer'
import PendingFriendsList from 'components/data/friends/PendingFriendsList'
import { AllFriendsList } from 'components/data/friends/AllFriendsList'
import { AccordionHeading } from 'components/ui/AccordionHeading'
import { BackButton } from 'components/common/BackButton'
import { AddFriendField } from 'components/data/friends/AddFriendField'

const FriendsScreen = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <RouteContainer>
      <Box w="100%" p={5}>
        <BackButton />
        <Text fontSize="6xl">{t('common.friends')}</Text>
        <AddFriendField />
        <Accordion mt={5} defaultIndex={[0, 1]} allowMultiple>
          <AccordionItem>
            <AccordionHeading heading={t('screens.friends.pendingList')} />
            <AccordionPanel>
              <PendingFriendsList />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeading heading={t('screens.friends.list')} />
            <AccordionPanel>
              <AllFriendsList />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </RouteContainer>
  )
}

export { FriendsScreen }
