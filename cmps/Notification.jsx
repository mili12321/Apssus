import eventBus from '../services/event-bus-service.js'
export class Notification extends React.Component {
    state={
        isShown:false
    }
    componentDidMount() {
        eventBus.on('notify', () => this.setState({isShown:true}))
    }
    render() {
        return (
           <div>
                {this.state.isShown && <h2>Notification</h2>}
           </div>
        )
    }
}