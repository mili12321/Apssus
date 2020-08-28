import { keepService } from '../services/keep-service.js'
export class NoteList extends React.Component {
    state = {
        edit: null,
        id: 0
    }
    setEdit = () => {
        var pencil = document.querySelector(`.pencil`)
        pencil.style.display = 'none'
        var todo = document.querySelector(`.todo`)
       
        this.setState({ edit: 'active' })
    }
    setId = (ID) => {
        this.setState({ ID })
    }
    lineLi = (id) => {
        let li = document.querySelector(`.${id}`)
        li.classList.toggle('lineT')
    }
    NoteInlineInput = (props) => {


        console.log(props)
        switch (this.state.edit) {
            case 'active': return <input className="todo" type="text" placeholder="todo:" onKeyUp={(ev) => {
                console.log(ev)
                if (ev.keyCode === 13) {
                    this.props.onInlineInput(ev.target.value, props)
                    var pencil = document.querySelector(`.pencil`)
                    pencil.style.display = 'none'
                    var pencil = document.querySelector(`.todo`)
                    pencil.style.display = 'block'
                }
            }} />
            default: return <div></div>
        }
    }



    render() {
        const notes = this.props.Notes
        var noteId;
        console.log(notes)
        return <div className="note-list">
            {
                notes.map(note =>
                    <div className="note" key={note.id}>
                        {note.txt && <div>
                            <h1>{note.txt}</h1>
                            {note.list && note.list.map(todo =>
                               <div> <li className={todo.id} onClick={() => {
                                    { this.lineLi(todo.id) }
                                }}>{todo.txt}<span className="fas fa-trash"></span></li></div>
                               )
                            }
                            
                            <button className="fas fa-pencil-alt pencil" onClick={this.setEdit}></button>
                            {this.NoteInlineInput(note.id)}
                        </div>}
                        {note.youtube && <iframe width="300" height="220"
                            src={note.youtube}>
                        </iframe>}
                        {note.img && <img width="300" height="220"
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
                            <span class="pin" onClick={() => {
                                this.props.pin(note.id)
                            }}>📌
                            </span>
                        </div>
                    </div>
                )
            }
        </div>

    }
}


