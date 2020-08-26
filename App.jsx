// const Router = ReactRouterDOM.HashRouter
// const { Route, Switch } = ReactRouterDOM

// import { Home } from './apps/home/Home.jsx'
// import { MissKeep } from './apps/missKeep/MissKeep.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import {MissKeep} from './apps/MissKeep/MissKeep.jsx'
import { EmailApp } from 'apps/misterEmail/EmailApp.jsx'
import { NavBar } from './cmps/NavBar.jsx'
export class App extends React.Component {

    render() {
        return (
                <Router>
                <div>
                    <header>
                        <NavBar />
                    </header>
                    <nav>
                        <main className="main-Contaoner">
                            <Switch>
                                <Route component={MissKeep} path="/MissKeep" />
                                <Route component={EmailApp} path="/EmailApp" />
                            </Switch>
                        </main>
                    </nav>
                </div>
                </Router>
            )
    }
}

