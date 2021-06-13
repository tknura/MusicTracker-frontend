import { Stack, Image, Link } from '@chakra-ui/react'

interface TopTrackAreaProps {
  title: string
  cover: string
  url: string
}

const TopTrackArea = ({
  title,
  cover,
  url
}: TopTrackAreaProps): JSX.Element => (
  <Stack
    direction="row"
    align="center"
  >
    <Image
      boxSize="60px"
      src={cover}
      alt=""
      mr={8}
    />
    <Link fontSize="lg" href={url}>
      {title}
    </Link>
  </Stack>
)

export { TopTrackArea }
