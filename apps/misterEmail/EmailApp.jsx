import { emailService } from '../../services/email-service.js'
import { EmailList } from 'cmps/EmailList.jsx';
import { EmailCompose } from 'EmailCompose.jsx';



export class EmailApp extends React.Component {
    state = {
        emailToAdd: emailService.getEmpty(),
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
    addEmail = () =>{
        console.log('adding email')
        emailService.add(this.state.emailToAdd)
        this.setState({emailToAdd:emailService.getEmpty()})
        this.loadEmails();
       
    }
    onInputChange=(ev)=>{
        console.log('input', ev.target.name)
        console.log('changed', ev.target.value)
        this.setState({emailToAdd: {...this.state.emailToAdd, [ev.target.name]:ev.target.value}})

    }
    render() {

        return (
            <div className="email-app-container">
                
                <div className="email-options-container">
                    {/* <input name='sender' value={this.state.emailToAdd.sender} 
                        placeholder='sender name'
                        type="text" onChange={this.onInputChange}
                    />
                    <input name='subject' value={this.state.emailToAdd.subject}
                        placeholder='subject' 
                        type="text" onChange={this.onInputChange}
                    />
                    <input name="body" value={this.state.emailToAdd.body}
                        placeholder='body' 
                        type="text" onChange={this.onInputChange}
                    />
                    <button onClick={this.addEmail}>add</button> */}

                    <div className="email-option new-mail">+ Compose</div>
                    <div className="email-option inbox">Inbox</div>
                    <div className="email-option starred">Starred</div>
                    <div className="email-option sent-mail">Sent mail</div>
                    <div className="email-option drafs">Drafs</div>
                </div>
                <EmailList emails={ this.state.emails }/>


                <EmailCompose>
                        <input name='sender' value={this.state.emailToAdd.sender} 
                            placeholder='sender name'
                            type="text" onChange={this.onInputChange}
                        />
                        <input name='subject' value={this.state.emailToAdd.subject}
                            placeholder='subject' 
                            type="text" onChange={this.onInputChange}
                        />
                        <input name="body" value={this.state.emailToAdd.body}
                            placeholder='body' 
                            type="text" onChange={this.onInputChange}
                        />
                        <button onClick={this.addEmail}>add</button>
                </EmailCompose>
            </div>


        )
    }
}