import eventBus from '../services/event-bus-service.js'
export class Notification extends React.Component {
    state={
        isShown:false,
        msg: '',

    }
    componentDidMount() {
        eventBus.on('notify', (data) =>{
            console.log(data)
            this.setState({isShown:true,msg:data.msg})
            setTimeout(()=>this.setState({isShown:false}), 2000)
        })
    }
    render() {
        return (
           <div className='notification'>
                {this.state.isShown && <h2  className="notification-container" >{this.state.msg} removed</h2>}
           </div>
        )
    }
}