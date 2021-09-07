import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { Button, Link, Select, Stack, useColorMode, VStack } from '@chakra-ui/react'
import SpotifyWebApi from 'spotify-web-api-node'

import { ChangeEmailForm, ChangeEmlFormFields } from 'components/forms/ChangeEmailForm'
import { scopes } from 'api/spotify/scopes'
import { CALLBACK_ROUTE, MAIN_ROUTE, APP_CONNECTION_ROUTE } from 'constants/routeNames'
import { useLogin, useLogout, useSpotifyToken, useUserId } from 'components/providers/AuthProvider'
import { useIsTokenRefreshing } from 'components/providers/SpotifyApiProvider'
import { FaSpotify } from 'react-icons/fa'
import { useChngPswdMutation } from 'api/hooks/auth/mutations/useChangePasswordMutation'
import { ChangePasswordForm, ChangePswdFormFields } from 'components/forms/ChangePasswordForm'
import { useChangeEmailMutation } from 'api/hooks/auth/mutations/useChangeEmailMutation'

const AppConnectionsScreen = (): JSX.Element => {
  const { t, i18n } = useTranslation()
  const history = useHistory()
  const spotifyToken = useSpotifyToken()
  const spotifyApiToken = useSpotifyToken()
  const logout = useLogout()
  const { colorMode, toggleColorMode } = useColorMode()
  const isTokenRefreshing = useIsTokenRefreshing()
  console.log(!isTokenRefreshing)
  const userID = useUserId()!

  const handleChangeValues = async (userId: number) => {
    history.push(MAIN_ROUTE)
  }

  const spotifyApiUrlGen = new SpotifyWebApi({
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    redirectUri: `${(new URL(window.location.href)).origin}${CALLBACK_ROUTE}`,
  })

  const authorizeUrl = spotifyApiUrlGen?.createAuthorizeURL(scopes, '')

  const { mutate: changePasswordMutate, isLoading: isChangePasswordLoading } = useChngPswdMutation({
    onSuccess: async ({ user_id: newUserId }) => { await handleChangeValues(newUserId) },
  })

  const { mutate: changeEmailMutate, isLoading: isChangeEmailLoading } = useChangeEmailMutation({
    onSuccess: async ({ user_id: newUserId }) => { await handleChangeValues(newUserId) },
  })

  const handleChangeEmailSubmit = (values: ChangeEmlFormFields) => {
    changeEmailMutate({
      new_email: values.newEmail,
      user_id: userID
    })
  }

  const handleChangePasswordSubmit = (values: ChangePswdFormFields) => {
    changePasswordMutate({
      user_id: userID,
      oldPassword: values.oldPassword,
      newPassword: values.newPassword
    })
  }

  const handleRedirect = () => {
    if (spotifyApiToken) {
      history.push(MAIN_ROUTE)
    } else {
      logout()
    }
  }

  return (
    <VStack
      h="100vh"
      w="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Stack w="300px" spacing="5">
        <ChangeEmailForm onSubmit={handleChangeEmailSubmit} />
        <ChangePasswordForm onSubmit={handleChangePasswordSubmit} />
        <Link href={authorizeUrl}>
          <Button mr={20} w="100%" isLoading={isTokenRefreshing} leftIcon={<FaSpotify />} background="#1DB954">
            {spotifyApiToken ? t('common.connectedSpotify') : t('common.loginSpotify') }
          </Button>
        </Link>
        <Select
          value={i18n.language}
          onChange={(event) => i18n.changeLanguage(event.currentTarget.value)}
        >
          <option value="en">English</option>
          <option value="pl">Polski</option>
        </Select>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light'
            ? t('screens.settings.toggleDarkTheme')
            : t('screens.settings.toggleLightTheme')}
        </Button>
        <Button colorScheme="primary" onClick={handleRedirect}>
          {spotifyApiToken ? t('screens.settings.backMain') : t('common.logout')}
        </Button>
      </Stack>
    </VStack>
  )
}

export { AppConnectionsScreen }
