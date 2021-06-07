import { LOGIN_ROUTE, CALLBACK_ROUTE, REGISTER_ROUTE } from 'constants/routeNames'
import { Redirect, Route, Switch } from 'react-router-dom'

import { LoginScreen } from 'screens/auth/LoginScreen/LoginScreen'
import { RegisterScreen } from 'screens/auth/RegisterScreen/RegisterScreen'
import { CallbackScreen } from 'screens/CallbackScreen/CallbackScreen'

const MainRoutes = (): JSX.Element => (
  <Switch>
    <Route exact path={LOGIN_ROUTE}>
      <LoginScreen />
    </Route>
    <Route exact path={REGISTER_ROUTE}>
      <RegisterScreen />
    </Route>
    <Route exact path={CALLBACK_ROUTE}>
      <CallbackScreen />
    </Route>
    <Redirect exact path="*" to={LOGIN_ROUTE} />
  </Switch>
)

export { MainRoutes }
