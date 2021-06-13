import { Stack, Text } from '@chakra-ui/react'

interface TopGenreAreaProps {
  name: string
}

const TopGenreArea = ({
  name,
}: TopGenreAreaProps): JSX.Element => (
  <Stack
    direction="row"
    align="center"
  >
    <Text fontSize="lg">
      {name}
    </Text>
  </Stack>
)

export { TopGenreArea }
