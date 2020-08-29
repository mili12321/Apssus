// const Router = ReactRouterDOM.HashRouter
// const { Route, Switch } = ReactRouterDOM

// import { Home } from './apps/home/Home.jsx'
// import { MissKeep } from './apps/missKeep/MissKeep.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import {Home} from './apps/home/Home.jsx'
import {About} from './apps/about/About.jsx'
import { EmailApp } from 'apps/misterEmail/EmailApp.jsx'
import { EmailDetails } from 'apps/misterEmail/EmailDetails.jsx'
import {MissKeep} from './apps/MissKeep/MissKeep.jsx'
import {MissBook} from './apps/MissBook/MissBook.jsx'
import {BookDetails} from './apps/MissBook/BookDetails.jsx'
// import {MissBooks} from './apps/missBooks/MissBooks.jsx'
import { NavBar } from './cmps/NavBar.jsx'
import { Notification } from './cmps/Notification.jsx'
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
                                <Route component={MissBook} path="/book" />
                                <Route component={BookDetails} path="/book/:bookId" />
                                {/* <Route component={MissBooks} path="/MissBooks" /> */}
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

