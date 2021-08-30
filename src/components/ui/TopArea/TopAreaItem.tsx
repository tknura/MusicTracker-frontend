import { Image, Link, HStack, StackProps, Text } from '@chakra-ui/react'

interface TopAreaItemType {
  name?: string
  photo?: string
  url?: string
}

type TopAreaItemProps = StackProps & TopAreaItemType

const TopAreaItem = ({
  name,
  photo,
  url,
  ...props
}: TopAreaItemProps): JSX.Element => (
  <HStack align="center" {...props}>
    {photo && (
      <Image
        boxSize="60px"
        src={photo}
        alt=""
        mr={8}
      />
    )}
    {url ? (
      <Link fontSize="lg" href={url}>
        {name}
      </Link>
    ) : (
      <Text fontSize="lg">
        {name}
      </Text>
    )}
  </HStack>
)

export { TopAreaItem }
export type { TopAreaItemType }
