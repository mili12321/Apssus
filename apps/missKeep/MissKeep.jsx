import { ComposeNote } from './cmps/ComposeNote.jsx'
import { NoteList } from './cmps/NoteList.jsx'
import { NoteTypeSelect } from './cmps/NoteTypeSelect.jsx'
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
        keepService.getNotes()
        .then((notes) => this.setState({ notes }))

    }

    writeNote = (txt) => {
        this.setState({ txt })

    }
    saveNewNote = () => {
        keepService.addNote(this.state.txt)
        .then(() => this.updateNotes())
    }
    
    DeleteNote = (noteId) => {
        keepService.deleteNote(noteId)
        this.updateNotes()
    }
    PinNote = (noteId) => {
        keepService.PinNote(noteId)
        this.updateNotes()
    }
    newNoteYoutube = (url) =>{
        keepService.newNoteYoutube(url)
        this.updateNotes()
    }
    newNoteImage = (url) => {
        keepService.newNoteImage(url)
        this.updateNotes()
    }

    render() {
        return (<div>
            <section>
                <ComposeNote onWriteNote={this.writeNote} />
                <button onClick={this.saveNewNote}>save!</button>
                <NoteTypeSelect onNewNoteImage={this.newNoteImage} onNewNoteYoutube={this.newNoteYoutube}/>
            </section>
            <div>
                <NoteList delete={this.DeleteNote} pin={this.PinNote} Notes={this.state.notes} />
            </div>
        </div>
        )
    }
}