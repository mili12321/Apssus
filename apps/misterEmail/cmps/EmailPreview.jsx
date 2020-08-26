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
export class EmailPreview extends React.Component {

  state = {
      isReadIcon:'',
      fontWeight: 'bold'
  }
  
  onReadMail = (ev) =>{
    ev.preventDefault();
    this.setState({isReadIcon:'-open'})
    this.setState({fontWeight:''})
    console.log('hello')
    this.toggleOpenMail()
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
        <tr className="email-preview" onClick={this.onReadMail}>
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
                <i className={`fas fa-envelope${this.state.isReadIcon}`} onClick={this.togglereadMail}></i>
                {/* <i class="fas fa-envelope-open"></i> */}
                <i className="fas fa-trash" onClick={ () => this.onRemoveEmail(this.props.idx) }></i>
            </div>
          </td>
    </tr>
      )
  }
}