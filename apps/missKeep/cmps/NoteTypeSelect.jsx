

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
    NoteSelect = (props) => {
        console.log(props)
        switch (props) {
            case 'youtube': return <input type="text" placeholder="youtubeURL here:" onChange={(ev)=>{
                this.props.onNewNoteYoutube(ev.target.value)
            }}/>
            case 'image': return <input type="text" placeholder="imageURL here:"  onChange={(ev)=>{
                this.props.onNewNoteImage(ev.target.value)
            }}/>
            default: return <div>what?</div>
        }
    }
    render() {
        return <div>
            <button onClick={this.setImage}>image</button>
            <button onClick={this.setYoutube}>youtube</button>
            {this.NoteSelect(this.state.curr)}
        </div>
    }
}