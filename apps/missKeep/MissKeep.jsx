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
    newNoteYoutube = (url) => {
        keepService.newNoteYoutube(url)
        this.updateNotes()
    }
    newNoteImage = (url) => {
        keepService.newNoteImage(url)
        this.updateNotes()
    }
    newNoteAudio = (url) => {
        keepService.newNoteAudio(url)
        this.updateNotes()
    }
    inlineInput = (li, id) => {
        keepService.newListNote(li, id)
        this.updateNotes()
    }
    onSearchNotes = (search) =>{
        keepService.getNotes(search)
        .then((notes) => this.setState({ notes }))

    }

    render() {
        return (<div className="main-Container">
            <section>
                <div className="ComposeNote-container">
                    Search Note:<input className="search-input" type="search" onChange={(ev) => {
                            this.onSearchNotes(ev.target.value)
                            // ev.target.value = ''
                        }
                    } />
                </div>
         
                <div className='ComposeNote-container'>
                    <ComposeNote onWriteNote={this.writeNote} />
                    <button className="save-btn" onClick={this.saveNewNote}>save!</button>
                </div>

                <NoteTypeSelect onNewNoteImage={this.newNoteImage} onNewNoteYoutube={this.newNoteYoutube} onNewNoteAudio={this.newNoteAudio} />
            </section>
            <div className="grid-container">
                <NoteList delete={this.DeleteNote} pin={this.PinNote} Notes={this.state.notes} onInlineInput={this.inlineInput} />
            </div>
        </div>
        )
    }
}