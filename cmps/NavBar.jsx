const { NavLink, withRouter } = ReactRouterDOM

function _NavBar() {

    return (
        <nav className="main-nav">
            <h1 className="logo"><span>APSUS</span></h1>
            <NavLink to="/MissKeep">MissKeep</NavLink>
            <NavLink to="/EmailApp">MisterEmail</NavLink>
            {/* <button onClick={ goBack }>Back</button> */}
        </nav>
    )
}
export const NavBar = withRouter(_NavBar)