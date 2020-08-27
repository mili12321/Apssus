export class NoteList extends React.Component {
    state = {
        edit: null
    }
    setEdit = () => {
        this.setState({ edit: 'active' })
    }
    setId = (ID) => {
        this.setState({ ID })
    }
    NoteInlineInput = (props) => {
        console.log(props)
        switch (this.state.edit) {
            case 'active': return <input type="text" placeholder="todo:" onKeyUp={(ev) => {
                console.log(ev)
                if (ev.keyCode === 13) {
                    this.props.onInlineInput(ev.target.value, props)
                }
            }} />
            default: return <div></div>
        }
    }



    render() {
        const notes = this.props.Notes
        var noteId;
        return <div className="note-list">
            {
                notes.map(note =>
                    <div className="note" key={note.id}>
                        {note.txt && <div>
                            <h1>{note.txt}</h1>
                            {note.list && note.list.map(text =>
                                <li>text</li>
                            )
                            }
                            <button className="fa-pencil-alt" onClick={this.setEdit}></button>
                            {this.NoteInlineInput(note.id)}
                        </div>}
                        {note.youtube && <iframe width="300" height="220"
                            src={note.youtube}>
                        </iframe>}
                        {note.img && <img width="400" height="315"
                            src={note.img}></img>}
                        {note.audio && <audio controls>
                            <source src="horse.ogg" type="audio/ogg" />
                            <source src="horse.mp3" type="audio/mpeg" />
                        </audio>}
                        <div className="flex note-mod">
                            <button className="fas fa-trash-alt delete" onClick={() => {
                                this.props.delete(note.id)
                            }}>
                            </button>
                            <button className="fas fa-thumbtack pin" onClick={() => {
                                this.props.pin(note.id)
                            }}>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>

    }
}


