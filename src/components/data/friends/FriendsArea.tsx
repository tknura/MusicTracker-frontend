import { Accordion, AccordionItem, AccordionPanel, Box, BoxProps, Heading } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { AccordionHeading } from 'components/ui/AccordionHeading'
import { AddFriendField } from './AddFriendField'
import { AllFriendsList } from './AllFriendsList'
import PendingFriendsList from './PendingFriendsList'

const FriendsArea = (props: BoxProps) => {
  const { t } = useTranslation()

  return (
    <Box minW="300px" {...props}>
      <Heading fontSize="4xl">{t('common.friends')}</Heading>
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
  )
}

export { FriendsArea }
