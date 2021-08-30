import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Stack,
  Text
} from '@chakra-ui/react'
import { FaShare } from 'react-icons/fa'

import { useFriendsQuery } from 'api/hooks/friends/queries/useFriendsQuery'
import { useUserId } from 'components/providers/AuthProvider'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useAddMessageMutation } from 'api/hooks/messages/mutations/useAddMessageMutation'

interface InternalShareProps {
  trackId: string
}

const InternalShare = ({
  trackId,
}: InternalShareProps) => {
  const { t } = useTranslation()
  const userId = useUserId()

  const { data: friends } = useFriendsQuery({ userId: userId || -1 })
  const { mutate: sendMessage, isLoading, isSuccess, isError } = useAddMessageMutation({})

  const [value, setValue] = useState(friends?.[0]?.friend_id.toString())
  const handleSendMessage = () => {
    if (userId && value) {
      sendMessage({
        senderId: userId,
        receiverId: parseInt(value, 10),
        songId: trackId,
      })
    }
  }

  if (!trackId || !userId) {
    return <></>
  }

  return (
    <Popover matchWidth>
      <PopoverTrigger>
        <IconButton
          aria-label="share"
          icon={<FaShare />}
          size="xs"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>{t('screens.main.selectFriend')}</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <RadioGroup
            maxH="300px"
            overflowY="auto"
            onChange={setValue}
            value={value}
          >
            <Stack>
              {friends?.map(friend => (
                <Radio
                  key={friend.friend_id}
                  value={friend.friend_id.toString()}
                >
                  {friend.friend_name}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </PopoverBody>
        <PopoverFooter>
          {isSuccess && <Text color="green">{t('screens.main.sent')}</Text>}
          {isError && <Text color="red">{t('screens.main.errorSending')}</Text>}
          {(!isSuccess || isLoading) && (
            <Button
              isLoading={isLoading}
              colorScheme="primary"
              onClick={handleSendMessage}
            >
              {t('screens.main.send')}
            </Button>
          )}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export { InternalShare }
