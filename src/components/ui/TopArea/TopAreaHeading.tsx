import { Heading, HStack, StackProps } from '@chakra-ui/react'

import { TimeRangeSelect } from 'components/data/TimeRangeSelect/TimeRangeSelect'

interface TopAreaHeadingProps extends StackProps {
  heading: string
  onTimeRangeChange: React.ChangeEventHandler<HTMLSelectElement>
}

const TopAreaHeading = ({
  heading,
  onTimeRangeChange,
  ...props
}: TopAreaHeadingProps): JSX.Element => (
  <HStack align="center" justify="space-between" {...props}>
    <Heading fontSize="xl" maxW="60%">
      {heading}
    </Heading>
    <TimeRangeSelect onChange={onTimeRangeChange} />
  </HStack>
)

export { TopAreaHeading }
