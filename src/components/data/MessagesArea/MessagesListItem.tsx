import { useTranslation } from 'react-i18next'
import { HStack, Image, LinkBox, LinkOverlay, Stack, StackProps, Text } from '@chakra-ui/react'

import { useTrack } from 'api/hooks/spotify/tracks/useTrack'

interface MessagesListItemType {
  songId: string
  senderName: string
}

type MessageListItemProps = MessagesListItemType & StackProps

const MessagesListItem = ({
  songId,
  senderName,
  ...props
}: MessageListItemProps) => {
  const { t } = useTranslation()
  const { data: song } = useTrack(songId)

  return (
    <Stack {...props}>
      <LinkBox
        _hover={{ background: 'rgba(0,0,0,0.1)' }}
        _active={{ background: 'rgba(0,0,0,0.3)' }}
        p="5"
      >
        <HStack>
          <Text as="b">{senderName}</Text>
          <Text>{t('screens.messages.sends')}</Text>
        </HStack>
        <HStack mt="2">
          <Image
            boxSize="60px"
            src={song?.album.images[0].url}
            alt=""
            mr={8}
          />
          <Stack
            direction={['row', 'column']}
            align="flex-start"
            justifyContent="center"
          >
            <LinkOverlay
              href={song?.external_urls.spotify}
              isExternal
              fontSize="xl"
            >
              <b>{song?.name || ''}</b>
            </LinkOverlay>
            <Text fontSize="md">
              {song?.artists[0].name}
            </Text>
          </Stack>
        </HStack>
      </LinkBox>
    </Stack>
  )
}

export { MessagesListItem }
export type { MessagesListItemType }
