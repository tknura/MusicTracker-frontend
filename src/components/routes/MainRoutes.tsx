import {
  LOGIN_ROUTE,
  CALLBACK_ROUTE,
  REGISTER_ROUTE,
  APP_CONNECTION_ROUTE,
  MAIN_ROUTE,
  SOCIAL_REGISTER_ROUTE
} from 'constants/routeNames'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AppConnectionsScreen } from 'screens/AppConnectionsScreen'

import { LoginScreen } from 'screens/auth/LoginScreen'
import { RegisterScreen } from 'screens/auth/RegisterScreen'
import SocialRegisterScreen from 'screens/auth/SocialRegisterScreen'
import { CallbackScreen } from 'screens/CallbackScreen'
import { MainScreen } from 'screens/MainScreen'

const MainRoutes = (): JSX.Element => (
  <Switch>
    <Route exact path={LOGIN_ROUTE}>
      <LoginScreen />
    </Route>
    <Route exact path={REGISTER_ROUTE}>
      <RegisterScreen />
    </Route>
    <Route exact path={SOCIAL_REGISTER_ROUTE}>
      <SocialRegisterScreen />
    </Route>
    <Route exact path={MAIN_ROUTE}>
      <MainScreen />
    </Route>
    <Route exact path={APP_CONNECTION_ROUTE}>
      <AppConnectionsScreen />
    </Route>
    <Route exact path={CALLBACK_ROUTE}>
      <CallbackScreen />
    </Route>
    <Redirect exact path="*" to={LOGIN_ROUTE} />
  </Switch>
)

export { MainRoutes }
