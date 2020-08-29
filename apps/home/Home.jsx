particlesJS.load('particles-js', 'particles.json');
const { NavLink, withRouter } = ReactRouterDOM
// import { Slideshow } from './cmps/Slideshow.jsx'
export class Home extends React.Component {

    render() {
        return (
            
            <section className="z-index-container">
                {/* <Slideshow /> */}

                <div className="home-links-container">
                    <div className="home-link-div">
                        <NavLink className="home-link" to="/EmailApp"><img className="mister-link" src="assets/img/mister1.png"/></NavLink>
                    </div>
                    <div className="home-link-div">
                        <NavLink className="home-link" to="/MissKeep"><img className="miss-link" src="assets/img/miss123.png"/></NavLink>
                    </div>
                </div>
            </section>
            
           
        )
    }
}
