const { Link } = ReactRouterDOM
export class EmailDetails extends React.Component {
    state = {
        email: null
    }

    
    render() {

        return (
            <div>
               {this.props.email}
               <Link to="/EmailApp">back</Link>
            </div>
        )
    }
}