const { Link } = ReactRouterDOM
export class EmailDetails extends React.Component {
    state = {
        email: null
    }
    componentDidMount() {
        console.log('hello')
    }
    
    render() {

        return (
            <div>
               {/* {this.props.email} */}
               email details
               <Link to="/EmailApp">back</Link>
            </div>
        )
    }
}