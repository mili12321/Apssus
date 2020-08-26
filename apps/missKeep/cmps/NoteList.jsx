export class NoteList extends React.Component {

    render() {
        const notes = this.props.Notes
        return <ul className="note-list">
            {
                notes.map(note =>
                    <li className="note" key={note.id}>
                        {note.txt}
                        {note.youtube && <iframe width="300" height="220"
                            src={note.youtube}>
                        </iframe>}
                        {note.img && <img width="400" height="315"
                            src={note.img}></img>}


                            <button onClick={() => {
                                this.props.delete(note.id)
                            }}>
                                x</button>
                            <button onClick={() => {
                                this.props.pin(note.id)
                            }}>
                                pin</button>
                    </li>
                )
            }
        </ul>

    }
}

