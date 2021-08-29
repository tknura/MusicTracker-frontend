import { ReactNode } from 'react'
import { Stack, StackDivider, StackProps } from '@chakra-ui/react'

import { TopAreaHeading } from './TopAreaHeading'
import { TopAreaItem } from './TopAreaItem'
import { TopAreaList } from './TopAreaList'

interface TopAreaProps extends StackProps {
  children?: ReactNode
}

const TopArea = ({
  children,
  ...props
}: TopAreaProps): JSX.Element => (
  <Stack divider={<StackDivider borderColor="gray.700" />} {...props}>
    {children}
  </Stack>
)

TopArea.Heading = TopAreaHeading
TopArea.ListItem = TopAreaItem
TopArea.List = TopAreaList

export { TopArea }
export type { TopAreaProps }
