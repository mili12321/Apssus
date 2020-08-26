export class NoteTypeSelect extends React.Component {
    state= {
        curr: ''
    }
    setImage = (image) => {
            this.setState({ [curr]: image})
    }
    setYoutube = (youtube) => {
        this.setState({ [curr]: youtube})
    }
    render() {
        return <div>
            <button onClick={this.setImage}>image</button>
            <button onClick={this.setYoutube}>youtube</button>
            <h1>hello</h1>
        </div>
    }
}