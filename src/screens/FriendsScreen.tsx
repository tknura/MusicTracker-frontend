import { useTranslation } from 'react-i18next'
import { Box, Button, Text } from '@chakra-ui/react'
import { FaArrowLeft } from 'react-icons/fa'

import { RouteContainer } from 'components/navigation/RouteContainer'
import { useHistory } from 'react-router'
import { TextField } from 'components/ui/TextField'

const FriendsScreen = () => {
  const { t } = useTranslation()
  const history = useHistory()

  return (
    <RouteContainer>
      <Box w="100%" p="5">
        <Button leftIcon={<FaArrowLeft />} onClick={() => history.goBack()}>
          {t('common.back')}
        </Button>
        <Text fontSize="6xl">
          {t('common.friends')}
        </Text>
        <TextField label="friend name" />
      </Box>
    </RouteContainer>
  )
}

export { FriendsScreen }
