import { emailService } from '../../services/email-service.js'
import { EmailList } from 'cmps/EmailList.jsx';
import { EmailCompose } from 'EmailCompose.jsx';



export class EmailApp extends React.Component {
    state = {
        emailToAdd: emailService.getEmpty(),
        emails: [],
        isModalShown: false
    }
    onCountUnreadMails = () =>{
        const count = emailService.CountUnreadMails()
        return count
    }
    componentDidMount() {
        this.loadEmails();
        this.onCountUnreadMails()
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
    onToggleModal=()=>{
        this.setState({isModalShown:!this.state.isModalShown})
    }
    onRemoveEmail = (idx) =>{
        console.log('email is removed',idx)
        emailService.remove(idx)
        this.loadEmails()
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

                    <div className="email-option new-mail" onClick={this.onToggleModal}><i className="fas fa-plus"></i><span className='compose'>Compose</span></div>
                   <div className="option-continer inbox-continer">
                <div className="email-option inbox"><i className="fas fa-inbox"></i><span>Inbox</span><span>{this.onCountUnreadMails()}</span></div>
                   </div>
                    <div className="option-continer">
                        <div className="email-option starred"><i className="fas fa-star"></i><span>Starred</span></div>
                    </div>
                    <div className="option-continer">
                        <div className="email-option sent-mail"><i className="fas fa-share-square"></i><span>Sent mail</span></div>
                    </div>
                   <div className="option-continer">
                        <div className="email-option drafs"><i className="fab fa-firstdraft"></i><span>Drafs</span></div>
                   </div>
                </div>
                <EmailList emails={ this.state.emails } onRemoveEmail={this.onRemoveEmail} />


                <EmailCompose isModalShown={this.state.isModalShown} onToggleModal={this.onToggleModal}>
                    <div className="modal-sender">
                        <span className="input-reference" >Cc:</span><input name='sender' value={this.state.emailToAdd.sender} 
                            // placeholder='Example@gmail.com'
                            type="text" onChange={this.onInputChange}
                        />
                    </div>
                    <div className="modal-subject">
                       <span className="input-reference">Subject:</span><input name='subject' value={this.state.emailToAdd.subject}
                            // placeholder='subject' 
                            type="text" onChange={this.onInputChange}
                        />
                    </div>
                    <div className="modal-body">
                        <textarea className="body" rows = "25" cols = "100"  name="body" value={this.state.emailToAdd.body}
                            // placeholder='body' 
                            type="text" onChange={this.onInputChange}
                        />
                    </div>
                   
                        <button onClick={this.addEmail}>Send</button>
                    
                </EmailCompose>
            </div>


        )
    }
}