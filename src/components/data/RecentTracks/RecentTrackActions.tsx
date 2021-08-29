import { HStack, Link } from '@chakra-ui/react'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import { SiFacebook, SiTwitter, SiGenius } from 'react-icons/si'
import { InternalShare } from '../InternalShare'

interface RecentTrackActionsProps {
  trackId?: string
  trackUrl?: string
  geniusPath?: string
}

const RecentTrackActions = ({
  trackId = '',
  trackUrl = '',
  geniusPath
}: RecentTrackActionsProps) => (
  <HStack margin={['5px 0', '0 10px']}>
    <InternalShare trackId={trackId} />
    <FacebookShareButton url={trackUrl}>
      <SiFacebook />
    </FacebookShareButton>
    <TwitterShareButton url={trackUrl}>
      <SiTwitter />
    </TwitterShareButton>
    <Link href={geniusPath} target="blank">
      <SiGenius />
    </Link>
  </HStack>
)

export { RecentTrackActions }
