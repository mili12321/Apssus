export class NoteList extends React.Component {

    render() {
        const notes = this.props.Notes
        return <ul>
            {
                notes.map(note =>
                    <li className="note" key={note.id}>
                        {note.txt}
                        <button onClick={() => {
                            this.props.delete(note.id)
                        }}>
                                  x</button>
                    </li>
                )
    }
        </ul>

    }
}

