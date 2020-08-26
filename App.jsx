// const Router = ReactRouterDOM.HashRouter
// const { Route, Switch } = ReactRouterDOM

// import { Home } from './apps/home/Home.jsx'
// import { MissKeep } from './apps/missKeep/MissKeep.jsx'
import { EmailApp } from 'apps/misterEmail/EmailApp.jsx'


export class App extends React.Component {

    render() {
        return (
            <div className='container'>
                <header >
                    <div className="logo-Appsus">Appsus</div>
                    <nav>
                        <a href="#">Home</a> | 
                        <a href="#">About</a> | 
                        <a href="#">Email</a> | 
                        <a href="#">Nots</a> | 
                    </nav>
                </header>
                {/* <main> */}
                    <EmailApp />
                {/* </main> */}

            </div>
            // <Router>
            //     <div>
            //         <header>
            //             <h1>Lets Pet</h1>
            //             <NavBar />
            //         </header>
            //         <main>
            //             <Switch>
            //                 <Route component={ MissKeep } path="/pet/nots/:id?" />
            //                 <Route component={ MailDetails } path="/mail/:mailId" />
            //                 <Route component={ MisterEmail } path="/mail" />
            //                 <Route component={ About } path="/about" />
            //                 <Route component={ Home } path="/" />
            //             </Switch>
            //         </main>
            //         <Notification />
            //     </div>
            // </Router>
        )
    }
}

