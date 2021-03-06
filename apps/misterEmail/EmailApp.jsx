import { emailService } from '../../services/email-service.js'
import { EmailList } from 'cmps/EmailList.jsx';
import { EmailCompose } from 'EmailCompose.jsx';
import { EmailFilter } from 'cmps/EmailFilter.jsx';
import eventBus from '../../services/event-bus-service.js'


export class EmailApp extends React.Component {
    state = {
        emailToAdd: emailService.getEmpty(),
        emails: [],
        isModalShown: false,
        filterBy: '',
        showMailbyClick: '',
        openEmail: '',
        displayed: ""
       
    }
    onReadMail = (id) =>{
        console.log('read')
        this.setState({showMailbyClick:'showMail'})
        this.setState({openEmail:'gray'})
        emailService.changeToRead(id)
        this.loadEmails();
      }
      onUnreadMail = (id) => {
        console.log('unread')
        this.setState({showMailbyClick:''})
        this.setState({openEmail:''})
        emailService.changeToUnRead(id)
        this.loadEmails();
      }
    onCountUnreadMails = () =>{
        const count = emailService.CountUnreadMails()
        return count
    }
    componentDidMount() {
        this.loadEmails();
        this.onCountUnreadMails()
        this.setState({all: false});
        emailService.getUnreadCount()
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
        this.onToggleModal()
    }
    deleteInputTxt = () =>{
        this.setState({emailToAdd:emailService.getEmpty()})
    }
    onInputChange=(ev)=>{
        console.log('input', ev.target.name)
        console.log('changed', ev.target.value)
        this.setState({emailToAdd: {...this.state.emailToAdd, [ev.target.name]:ev.target.value}})

    }
    onToggleModal=()=>{
        this.setState({isModalShown:!this.state.isModalShown})
    }
    
    onRemoveEmail = (id) =>{
        console.log('email is removed',id)
        emailService.remove(id)
        this.loadEmails()
        eventBus.emit('notify',{msg:"Email"})
    }
    setFilter = (filterBy) =>{
        console.log("ev.target.value",filterBy);
        this.setState({filterBy})
    }
    setFilterIsRead = () => {
        this.setState({filterBy: true})
    }
    setFilterIsUnRead = () => {
        this.setState({filterBy: false})
    }
    unSetFilter = () =>{
        this.setState({filterBy: ''})
    }
    getEmailForDisplay(){
        const emails = this.state.emails.filter(email =>
            email.sender.includes(this.state.filterBy) ||
            email.subject.includes(this.state.filterBy) ||
            email.body.includes(this.state.filterBy)||
            email.body.includes(this.state.filterBy)||
            email.isRead===this.state.filterBy
        )
        return emails;
        
        
    }
    toggleMenu = ()=> {
        // document.querySelector('.mobile-menu').classList.toggle('displayed');
        this.setState({displayed:'displayed'})
    }
    render() {
        const emails = this.getEmailForDisplay()
        
        return (
            <React.Fragment> 
               {/* <h1>{ emailService.getUnreadCount()}</h1> */}
            <EmailFilter onFilter={this.setFilter} setFilterIsRead={this.setFilterIsRead} setFilterIsUnRead={this.setFilterIsUnRead} />

            <div className="email-app-container">
              
            {/* <div className="hamburger-button" onClick={this.toggleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
                <div class={`mobile-menu slide-in-top ${this.state.displayed}`}>
                    <a className="mobile-nav-link" href="#"><i className="fas fa-plus"></i><span className='compose'>Compose</span></a>
                    <a className="mobile-nav-link" href="#"><i className="fas fa-inbox"></i><span className="Inbox">Inbox</span><span>{ emailService.getUnreadCount()}</span></a>
                    <a className="mobile-nav-link" href="#"><i className="fas fa-star"></i><span>Starred</span></a>
                    <a className="mobile-nav-link" href="#"><i className="fas fa-share-square"></i><span>Sent mail</span></a>
                    <a className="mobile-nav-link" href="#"><i className="fab fa-firstdraft"></i><span>Drafs</span></a>
                </div> */}

                <div className="email-options-container">

                    <div className="email-option new-mail" onClick={this.onToggleModal}><i className="fas fa-plus"></i><span className='compose'>Compose</span></div>
                   <div className="option-continer inbox-continer">
                <div className="email-option inbox" onClick={this.unSetFilter}><i className="fas fa-inbox"></i><span className="Inbox">Inbox</span><span>{ emailService.getUnreadCount()}</span></div>
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
                <EmailList emails={ emails } onRemoveEmail={this.onRemoveEmail} onReadMail={this.onReadMail} onUnreadMail={this.onUnreadMail} />
                {/* /*to show all the email =  this.state.emails to show only the email from the filter, eamil to deisplay = emails */}


                <EmailCompose isModalShown={this.state.isModalShown} onToggleModal={this.onToggleModal} deleteInputTxt={this.deleteInputTxt}>
                    <div className="modal-sender">
                        <span className="input-reference" >Cc:</span><input className="mail-input" name='sender' value={this.state.emailToAdd.sender} 
                            // placeholder='Example@gmail.com'
                            type="text" onChange={this.onInputChange}
                        />
                    </div>
                    <div className="modal-subject">
                       <span className="input-reference">Subject:</span><input className="mail-input" name='subject' value={this.state.emailToAdd.subject}
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
            </React.Fragment>


        )
    }
}