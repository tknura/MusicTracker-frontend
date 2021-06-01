import { AUTH_ROUTE } from 'constants/routeNames'
import { Redirect, Route, Switch } from 'react-router-dom'

import { AuthScreen } from 'screens/AuthScreen/AuthScreen'

const MainRoutes = (): JSX.Element => (
  <Switch>
    <Route exact path={AUTH_ROUTE}>
      <AuthScreen />
    </Route>
    <Redirect exact path="*" to="/auth" />
  </Switch>
)

export { MainRoutes }
