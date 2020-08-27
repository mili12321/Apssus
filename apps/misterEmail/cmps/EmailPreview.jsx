// export function EmailPreview({ email }) {
//     return <tr className="email-preview" key={ email.id }>
//                 <td className="email-icons">icons</td>
//                 <td className="email-subject">
//                     { email.subject }
//                 </td>
//                 <td className="email-body">
//                     { email.body }
//                     Lorem, ipsum dolor sit amet consectetur adipisicing.
//                 </td>
//                 <td className="email-time"> 
//                   { email.sentAt }
//                   <div className="email-options">
//                       <i class="fas fa-envelope"></i>
//                       {/* <i class="fas fa-envelope-open"></i> */}
//                       <i class="fas fa-trash"></i>
//                   </div>
//                 </td>
//             </tr>
// }
import { emailService } from '../../services/email-service.js'
import { EmailDetails } from './EmailDetails.jsx'
export class EmailPreview extends React.Component {

  state = {
      isReadIcon:'',
      fontWeight: 'bold',
      showMailbyClick: '',
      openEmail: ''
  }
  
  onReadMail = (ev) =>{
    ev.preventDefault();
    this.setState({isReadIcon:'-open'})
    this.setState({fontWeight:''})
    console.log('read')
    this.setState({showMailbyClick:'showMail'})
    this.setState({openEmail:'gray'})
  }
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
  onRemoveEmail = (idx) =>{
    console.log('email is removed',idx)
    emailService.remove(idx)
  }
  render() {
  
      return (
      <React.Fragment>
        <tr className={`email-preview ${this.state.openEmail}`} onClick={this.onReadMail}>
          <td className="email-icons">icons</td>
          <td className={`email-sender ${this.state.fontWeight}`}>{this.props.email.sender}</td>
          <td className={`email-subject ${this.state.fontWeight}`}>
              { this.props.email.subject }
          </td>
          <td className="email-body">
              { this.props.email.body }
              Lorem, ipsum dolor sit amet consectetur adipisicing.
          </td>
          <td className={`email-time  ${this.state.fontWeight}`}> 
            <div  className="time">{ this.props.email.sentAt }</div>
            <div className="email-options">
                <div className="round-div-on-hover-fa-envelope"></div>
                <i className={`fas fa-envelope${this.state.isReadIcon} center`} onClick={this.togglereadMail}></i>
                <div className="round-div-on-hover-fa-trash"></div>
                <i className="fas fa-trash center" onClick={ () => this.onRemoveEmail(this.props.idx) }></i>
            

            </div>
          </td>
        </tr>
        <tr>
          <td colSpan='5' className={`sliding-email ${this.state.showMailbyClick}`}>
              <div className="sliding-email-header">
                  <div className="sliding-email-subject">{ this.props.email.subject }</div>
                  <div className="sliding-email-options">

                    <div className="round-div">
                      <i className="fas fa-trash" onClick={ () => this.onRemoveEmail(this.props.idx) }></i>
                    </div>
                    <div className="round-div">
                      <i className="fas fa-expand" onClick={()=>{
                        <EmailDetails email={this.props.email}/>
                      }}></i>
                    </div>
                   
                  </div>
              </div>
              <div className="sliding-email-sender"><span className="sender-name">{this.props.email.sender}</span> {`<${this.props.email.sender}@gmail.com>`}</div>
              <div className="sliding-email-body">{ this.props.email.body }
              Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
          </td>
        </tr>
      </React.Fragment>
      )
  }
}