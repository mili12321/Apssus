const { Link } = ReactRouterDOM

import { emailService } from '../../services/email-service.js'
import { EmailDetails } from './EmailDetails.jsx'
export class EmailPreview extends React.Component {

  state = {
      // isReadIcon:'',
      // fontWeight: 'bold',
      showMailbyClick: '',
      openEmail: '',
      isOpen: false,
      star:"far"
  }


  onToggleMail = (ev,id) =>{
    ev.stopPropagation()
    ev.preventDefault();
    this.props.email.isRead? this.props.onUnreadMail(id) :this.props.onReadMail(id)

  }

  onToggleEmailPreview = (id)=>{
    this.state.isOpen? this.closeEmail() :this.props.onReadMail(id)
    this.setState({isOpen:!this.state.isOpen})
  }
  // onReadMail = (idx) =>{
  //   console.log('read')
  //   this.setState({showMailbyClick:'showMail'})
  //   this.setState({openEmail:'gray'})
  //   emailService.changeToRead(idx)
  // }
  closeEmail = () =>{
    this.setState({showMailbyClick:''})
    this.setState({openEmail:''})
  }
  // onUnreadMail = (ev) => {
  //   ev.stopPropagation()
  //   ev.preventDefault();
  //   console.log('unread')
  //   this.setState({showMailbyClick:''})
  //   this.setState({openEmail:''})
  //   emailService.changeToUnRead(idx)
  // }


  // togglereadMail = (ev) =>{
  //   ev.preventDefault();
  //   if(this.state.isReadIcon==='-open'){
  //     this.setState({isReadIcon:''})
  //   }else{
  //     this.setState({isReadIcon:'-open'})
  //   }
  //   if(this.state.fontWeight===''){
  //     this.setState({fontWeight:'bold'})
  //   }else{
  //     this.setState({fontWeight:''})
  //   }
  //   console.log('unread')
  //   console.log(ev)
  // }

  toggleOpenMail = () =>{

  }

  changeStar = () => {
    this.setState({star:"fas"})
  }
  
  render() {
  
      return (
      <React.Fragment>
        <tr className={`email-preview ${this.state.openEmail}`} onClick={()=>{this.onToggleEmailPreview(this.props.email.id)}}>
          <td className="email-icons" onClick={this.changeStar}><i class={`${this.state.star} fa-star`}></i></td>
          <td className={`email-sender ${this.props.email.isRead?"":"font-bold"}`}>{this.props.email.sender}</td>
          <td className={`email-subject ${this.props.email.isRead?"":"font-bold"}`}>
              { this.props.email.subject }
          </td>
          <td className="email-body">
              { this.props.email.body }
              Lorem, ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, quia. Veritatis praesentium expedita nemo quas explicabo quo sit nihil veniam sunt illum modi ut amet obcaecati culpa beatae, voluptatibus id!
          </td>
          <td className={`email-time `}> 
            <div  className="time">{ this.props.email.sentAt}</div>
            <div className="email-options">
                <div className="round-div-on-hover-fa-envelope"></div>
                <i className={`fas fa-envelope${this.props.email.isRead?"-open":""} center`} onClick={(ev)=>{this.onToggleMail(ev,this.props.email.id)}}></i>
                <div className="round-div-on-hover-fa-trash"></div>
                <i className="fas fa-trash center" onClick={ () => this.props.onRemoveEmail(this.props.email.id) }></i>
            

            </div>
          </td>
        </tr>
        <tr>
          <td colSpan='5' className={`sliding-email ${this.state.showMailbyClick}`}>
              <div className="continer-td">
                  <div className="sliding-email-header">
                      <div className="sliding-email-subject">{ this.props.email.subject }</div>
                      <div className="sliding-email-options">

                        <div className="round-div">
                          <i className="fas fa-trash" onClick={ () => this.props.onRemoveEmail(this.props.idx) }></i>
                        </div>
                        <div className="round-div">
                          <Link to={`/EmailApp/${this.props.email.id}`}>
                            <i className="fas fa-expand"></i>
                          </Link>
                        </div>

                      </div>
                  </div>
                  <div className="sliding-email-sender"><span className="sender-name">{this.props.email.sender}</span> {`<${this.props.email.sender}@gmail.com>`}</div>
                  <div className="sliding-email-body">{ this.props.email.body }
                  Lorem, ipsum dolor sit amet consectetur adipisicing.</div>

              </div>
          </td>
        </tr>
      </React.Fragment>
      )
  }
}