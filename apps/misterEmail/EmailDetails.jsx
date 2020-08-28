const { Link } = ReactRouterDOM
import { emailService } from '../../services/email-service.js'
export class EmailDetails extends React.Component {
    state = {
        email: null
    }
    componentDidMount() {
        this.loadEmail();
    }
    loadEmail() {
        const emailId = this.props.match.params.emailId
        emailService.getById(emailId)
            .then(email => this.setState({ email }))
    }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Prev', prevProps);
    //     console.log('Curr', this.props);
    //     if (prevProps.match.params.emailId !== this.props.match.params.emailId) {
    //         this.loadEmail()
    //     }
    // }

    render() {
        const{email}=this.state
        if (!email) return <div>Loading....</div>
        // const { prevPetId, nextPetId } = emailService.getNextPrev(email.id)
        return (
            <div className='email-details'>
               {email.sender} |
               {email.subject} |
               {email.body} |
               email details
               <Link to="/EmailApp">back</Link>
            </div>
        )
    }
}