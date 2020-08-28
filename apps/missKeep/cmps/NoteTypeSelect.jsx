

export class NoteTypeSelect extends React.Component {
    state = {
        curr: null
    }
    setImage = () => {
        this.setState({ curr: 'image' })
    }
    setYoutube = () => {
        this.setState({ curr: 'youtube' })
    }
    setAudio = () => {
        this.setState({ curr: 'audio' })
    }
    NoteSelect = (props) => { 
        switch (props) {
            case 'youtube': return <input type="text" placeholder="youtubeURL here:" onKeyUp={(ev)=>{
                console.log(ev)
                if(ev.keyCode === 13) {
                this.props.onNewNoteYoutube(ev.target.value)
                .then (ev.target.value='')
                }
            }}/>
            case 'image': return <input type="text" placeholder="imageURL here:"  onKeyUp={(ev)=>{
                if(ev.keyCode === 13) {
                this.props.onNewNoteImage(ev.target.value)
                }
            }}/>
            case 'audio': return <input type="text" placeholder="audioURL here"  onKeyUp={(ev)=>{
                if(ev.keyCode === 13) {
                this.props.onNewNoteAudio(ev.target.value)
                }
            }}/>
            default: return <div>what?</div>
        }
    }
    render() {
        return <div>
            <button className="fas fa-image" onClick={this.setImage}></button>
            <button className="fab fa-youtube" onClick={this.setYoutube}></button>
            {/* <button  onClick={this.setAudio}></button> */}
            {this.NoteSelect(this.state.curr)}
        </div>
    }
}