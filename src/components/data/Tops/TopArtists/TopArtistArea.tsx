import { Stack, Image, Link } from '@chakra-ui/react'

interface TopArtistAreaProps {
  name: string
  photo: string
  url: string
}

const TopArtistArea = ({
  name,
  photo,
  url
}: TopArtistAreaProps): JSX.Element => (
  <Stack
    direction="row"
    align="center"
  >
    <Image
      boxSize="60px"
      src={photo}
      alt=""
      mr={8}
    />
    <Link fontSize="lg" href={url}>
      {name}
    </Link>
  </Stack>
)

export { TopArtistArea }
