import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, BoxProps, Divider, Heading, Skeleton } from '@chakra-ui/react'

import { useGetMessagesQuery } from 'api/hooks/messages/queries/useGetMessagesQuery'
import { useUserId } from 'components/providers/AuthProvider'
import { MessagesList } from './MessagesList'

const MessagesArea = (props: BoxProps) => {
  const { t } = useTranslation()
  const userId = useUserId()

  const { data: messagesData, isLoading } = useGetMessagesQuery({ userId: userId || -1 })

  const messages = useMemo(() => (
    messagesData?.map(message => ({
      songId: message.song_id,
      senderName: message.sender,
    })) || []
  ), [messagesData])

  return (
    <Box minW="300px" {...props}>
      <Heading fontSize="4xl">{t('common.messages')}</Heading>
      <Divider my="2" />
      <Skeleton isLoaded={!isLoading}>
        <MessagesList
          messages={messages}
        />
      </Skeleton>
    </Box>
  )
}

export { MessagesArea }
