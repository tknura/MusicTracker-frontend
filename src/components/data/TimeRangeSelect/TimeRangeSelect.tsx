import React from 'react'
import { useTranslation } from 'react-i18next'

import { Select, SelectProps } from '@chakra-ui/react'
import { LONG, MEDIUM, SHORT } from 'constants/timeRanges'

const TimeRangeSelect: React.FC<SelectProps> = ({
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <Select
      size="lg"
      variant="flushed"
      maxW="40%"
      {...rest}
    >
      <option disabled>{t('screens.main.chooseTime')}</option>
      <option value={SHORT}>{t('screens.main.fourWeeks')}</option>
      <option value={MEDIUM}>{t('screens.main.sixMonths')}</option>
      <option value={LONG}>{t('screens.main.allTime')}</option>
    </Select>
  )
}

export { TimeRangeSelect }
