import { ComposeNote } from './cmps/ComposeNote.jsx'
import { NoteList } from './cmps/NoteList.jsx'
import { keepService } from './services/keep-service.js'

export class MissKeep extends React.Component {
    state = {
        txt: 'future note',
        writeNote: '',
        notes: []
    }
    componentDidMount() {
        this.updateNotes();
    }

    updateNotes = () => {
        var notes = keepService.getNotes()
        this.setState({ notes })

    }

    writeNote = (txt) => {
        this.setState({ txt })
    }
    saveNoteToService = () => {
        keepService.addNote(this.state.txt)
        this.updateNotes()
    }
    
    DeleteNote = (noteId) => {
        keepService.deleteNote(noteId)
        this.updateNotes()
    }

    render() {
        return (<div>
            <section>
                <ComposeNote onWriteNote={this.writeNote} />
                <button onClick={this.saveNoteToService}>save!</button>
            </section>
            <div>
                <NoteList delete={this.DeleteNote} Notes={this.state.notes} />
            </div>
        </div>
        )
    }
}