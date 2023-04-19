import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Dashborad from '../pages/Dashborad'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashborad} />
        </Switch>
    )
}