import { emailService } from '../../services/email-service.js'
import { EmailList } from 'cmps/EmailList.jsx';
export class EmailApp extends React.Component {
    state = {
        emails: [],
    }
    componentDidMount() {
        this.loadEmails();
    }
    loadEmails() {
        emailService.query()
            .then(emails => {
                this.setState({ emails })
            })
    }
    render() {

        return (
            <div className="email-app-container">
                <div className="email-options-container">
                    <div className="email-option new-mail">+ Compose</div>
                    <div className="email-option inbox">Inbox</div>
                    <div className="email-option starred">Starred</div>
                    <div className="email-option sent-mail">Sent mail</div>
                    <div className="email-option drafs">Drafs</div>
                </div>
                <EmailList emails={ this.state.emails } />
            </div>
        )
    }
}