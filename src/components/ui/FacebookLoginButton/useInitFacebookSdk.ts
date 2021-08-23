import { useEffect } from 'react'

declare global {
  interface Window {
    fbAsyncInit: () => void
  }
}

const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID

const useInitFacebookSdk = () => {
  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: facebookAppId,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v11.0'
      })
    }

    const script = document.createElement('script')

    script.src = 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v11.0&appId=1212210079251699&autoLogAppEvents=1'
    script.async = true
    script.defer = true
    script.crossOrigin = 'anonymous'
    script.nonce = '4RBkjZee'

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}

export { useInitFacebookSdk }
