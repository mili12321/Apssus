const { NavLink, withRouter } = ReactRouterDOM

function _NavBar() {

    return (
        <nav className="header-continer">
            <div className="logo-appsus"><span>Appsus  </span><img src="https://img.icons8.com/metro/15/000000/horse.png"/></div>
            <div className="navbar-container">
                <NavLink className="navbar-link" to="/">Home</NavLink>|
                <NavLink className="navbar-link" to="/about">About</NavLink>|
                <NavLink className="navbar-link" exact to="/book">MissBook</NavLink>|
                <NavLink className="navbar-link" to="/MissKeep">MissKeep</NavLink>|
                <NavLink className="navbar-link" to="/EmailApp">MisterEmail</NavLink>
            </div>
            {/* <button onClick={ goBack }>Back</button> */}
        </nav>
    )
}
export const NavBar = withRouter(_NavBar)