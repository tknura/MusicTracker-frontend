import { Link } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { SPOTIFY_AUTH_URL } from 'constants/urls'

const AppConnectionsScreen = (): JSX.Element => {
  const { t } = useTranslation()

  const redirectUri = 'http://localhost:3000/callback'
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const responseType = 'code'

  const authorizeUrl = `${SPOTIFY_AUTH_URL}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}`

  return (
    <div>
      <Link href={authorizeUrl}>
        {t('common.loginSpotify')}
      </Link>
    </div>
  )
}

export { AppConnectionsScreen }
