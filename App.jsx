// const Router = ReactRouterDOM.HashRouter
// const { Route, Switch } = ReactRouterDOM

// import { Home } from './apps/home/Home.jsx'
// import { MissKeep } from './apps/missKeep/MissKeep.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import {Home} from 'apps/home/Home.jsx'
import {About} from 'apps/about/About.jsx'
import { EmailApp } from 'apps/misterEmail/EmailApp.jsx'
import { EmailDetails } from 'apps/misterEmail/EmailDetails.jsx'
import {MissKeep} from 'apps/MissKeep/MissKeep.jsx'

// import {MissBooks} from './apps/missBooks/MissBooks.jsx'
import { NavBar } from 'cmps/NavBar.jsx'
import { Notification } from 'cmps/Notification.jsx'

// import {BookApp} from './apps/missBooks/pages/BookApp.jsx'
// import {BookDetails} from './apps/missBooks/pages/BookDetails.jsx'

export class App extends React.Component {

    render() {
        return (
                <Router>
                <div>
                    <header className="header">
                        <NavBar/>
                    </header>
                    {/* <nav> */}
                        <main className="main-Contaoner">
                            <Switch>
                                <Route component={EmailDetails} path="/EmailApp/:emailId" />
                                <Route component={EmailApp} path="/EmailApp" />
                                <Route component={MissKeep} path="/MissKeep" />
{/* 
                                <Route component={ BookDetails } path="/book/:bookId" />
                                <Route component={ BookApp } path="/book" /> */}
                            
                                <Route component={ About } path="/about" />
                                <Route exact component={ Home } path="/" />
                            </Switch>
                        </main>
                    {/* </nav> */}
                    <Notification />
                </div>
                </Router>
            )
    }
}

