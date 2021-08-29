import { Stack, StackDivider, StackProps } from '@chakra-ui/react'
import { MessagesListItem, MessagesListItemType } from './MessagesListItem'

interface MessagesListProps extends StackProps{
  messages: MessagesListItemType[]
}

const MessagesList = ({ messages, ...props }: MessagesListProps) => (
  <Stack {...props} divider={<StackDivider />}>
    {messages?.map((message) => (
      <MessagesListItem
        key={`${message.songId}-${message.senderName}`}
        senderName={message.senderName}
        songId={message.songId}
      />
    ))}
  </Stack>
)

export { MessagesList }
