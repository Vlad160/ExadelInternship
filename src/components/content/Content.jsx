import React from 'react'
import LogIn from '../../containers/login/LogIn'
// eslint-disable-next-line no-unused-vars
import { Switch, Route } from 'react-router-dom'
import Routes from '../../containers/routes/Routes'
// eslint-disable-next-line no-unused-vars
import NewRoute from '../../containers/newRoute/NewRoute'
import OneRouteInfo from '../../containers/one-route/OneRouteInfo'
import NewRide from '../../containers/newRide/NewRide'
class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/routes" component={Routes} />
        <Route
          exact
          path="/routes/route-info/:routeid"
          component={OneRouteInfo}
        />
        <Route exact path="/new-ride" component={NewRide}/>
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    )
  }
}

export default Content
