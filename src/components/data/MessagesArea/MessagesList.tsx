import { Stack, StackDivider, StackProps, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { MessagesListItem, MessagesListItemType } from './MessagesListItem'

interface MessagesListProps extends StackProps{
  messages: MessagesListItemType[]
}

const MessagesList = ({ messages, ...props }: MessagesListProps) => {
  const { t } = useTranslation()

  return (
    <Stack {...props} divider={<StackDivider />}>
      {messages.length ? (
        messages?.map((message) => (
          <MessagesListItem
            key={`${message.songId}-${message.senderName}`}
            senderName={message.senderName}
            songId={message.songId}
          />))
      ) : (
        <Text>
          {t('screens.messages.empty')}
        </Text>
      )}
    </Stack>
  )
}

export { MessagesList }
