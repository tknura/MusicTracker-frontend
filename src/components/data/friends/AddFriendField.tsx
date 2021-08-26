import { Button, Flex, FlexProps } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { TextField } from 'components/ui/TextField'

const AddFriendField = (props: FlexProps) => {
  const { t } = useTranslation()

  return (
    <Flex alignItems="flex-end" {...props}>
      <TextField label={t('screens.friends.friendUsername')} />
      <Button colorScheme="primary" ml={5}>
        {t('screens.friends.addFriend')}
      </Button>
    </Flex>
  )
}

export { AddFriendField }
