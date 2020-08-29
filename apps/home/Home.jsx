particlesJS.load('particles-js', 'particles.json');
const { NavLink, withRouter } = ReactRouterDOM
export class Home extends React.Component {

    render() {
        return (
            
            <section className="z-index-container">
                <h2>Home Sweet Home</h2>
                <div className="home-links-container">
                    <div className="home-link-div">
                        <NavLink className="home-link" to="/EmailApp">MisterEmail</NavLink>
                    </div>
                    <div className="home-link-div">
                        <NavLink className="home-link" to="/MissKeep">MissKeep</NavLink>
                    </div>
                </div>
            </section>
            
           
        )
    }
}
