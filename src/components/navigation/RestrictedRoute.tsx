import { useUserId } from 'components/providers/AuthProvider'
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom'

const RestrictedRoute = ({
  children,
  ...rest
}: RouteProps) => {
  const location = useLocation()
  const userId = useUserId()
  const redirectPath = userId ? {
    pathname: '/',
  } : {
    pathname: '/login',
    state: {
      redirectPath: location.pathname,
    },
  }

  return (
    <Route {...rest}>
      {userId
        ? children
        : <Redirect to={redirectPath} />}
    </Route>
  )
}

export { RestrictedRoute }
