import { useState } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

interface ShowMoreToggleProps extends ButtonProps {
  onShowMore: () => void
  onShowLess: () => void
}

const ShowMoreToggle = ({
  onShowMore: handleShowMore,
  onShowLess: handleShowLess,
}: ShowMoreToggleProps) => {
  const { t } = useTranslation()

  const [isMore, setMore] = useState<boolean>(false)

  const handleToggle = () => {
    setMore(prev => !prev)
    if (!isMore) {
      handleShowMore()
    } else {
      handleShowLess()
    }
  }

  return (
    <Button variant="link" onClick={handleToggle}>
      {!isMore ? t('screens.main.showMore') : t('screens.main.showLess')}
    </Button>
  )
}

export { ShowMoreToggle }
