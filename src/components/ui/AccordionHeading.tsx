import { AccordionButton, AccordionIcon, Flex, Heading, Spacer } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface AccordionHeadingProps {
  heading: string | ReactNode
}

const AccordionHeading = ({ heading }: AccordionHeadingProps) => (
  <AccordionButton>
    <Flex>
      <Heading fontSize="md">
        {heading}
      </Heading>
    </Flex>
    <Spacer />
    <AccordionIcon />
  </AccordionButton>
)
export { AccordionHeading }
