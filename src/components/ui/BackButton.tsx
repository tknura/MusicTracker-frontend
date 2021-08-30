import { Button, ButtonProps } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router'

const BackButton = (props: ButtonProps) => {
  const { t } = useTranslation()
  const history = useHistory()

  return (
    <Button
      leftIcon={<FaArrowLeft />}
      onClick={() => history.goBack()}
      {...props}
    >
      {t('common.back')}
    </Button>
  )
}

export { BackButton }
