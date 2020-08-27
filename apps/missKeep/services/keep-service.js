export const keepService = {
    addNote,
    getNotes,
    deleteNote,
    PinNote,
    newNoteYoutube,
    newNoteImage,
    newNoteAudio,
    newListNote,
    searchNotes,
    makeId
}

//storage
const NOTE_KEY = 'notes'


function saveToStorage(key, val) {
    var str = JSON.stringify(val);
    localStorage.setItem(key, str)
}


function loadFromStorage(key) {
    var str = localStorage.getItem(key);
    var val = JSON.parse(str)
    return val;
}

//search
function searchNotes(text) {
    console.log(text);
    const notes = loadFromStorage(NOTE_KEY)
    let newNotes = []
    notes.forEach((note) => {
        if (note.text === text && !newNotes.includes(note))
            newNotes.push(note)
    })
    console.log(newNotes)
    return newNotes
}

//pinNote

function PinNote(noteId) {

    const notes = loadFromStorage(NOTE_KEY)
    const idx = notes.findIndex(note => note.id === noteId)
    const next = notes[idx]
    notes.splice(idx, 1)
    notes.unshift(next)
    if (notes[0].pinned = true) {
        notes[0].pinned = false
    } else {
        notes[0].pinned = true;
    }
    saveToStorage(NOTE_KEY, notes)
}






var gNotes = [{
    txt: 'this is a list',
    id: makeId(),
    list: [{txt: 'hello its me', id: makeId()}, {txt: 'hello its me', id: makeId()}, {txt: 'hello its me', id: makeId()}]
},

{
    id: makeId(),
    youtube: `https://www.youtube.com/embed/tgbNymZ7vqY`,
},
{
    id: makeId(),
    img: 'https://compote.slate.com/images/18ba92e4-e39b-44a3-af3b-88f735703fa7.png?width=780&height=520&rect=1560x1040&offset=0x0'
},
{
    txt: 'hello react',
    id: makeId()
}
// {
//     txt: null,
//     id: makeId(),
//     audio: '',
// },


]



function noteById(noteId) {

}


function newNoteAudio(url) {
    const notes = loadFromStorage(NOTE_KEY)
    let note = {
        txt: null,
        id: makeId(),
        audio: url,
    }
    notes.unshift(note)
    saveToStorage(NOTE_KEY, notes)
    return Promise.resolve()
}

function deleteNote(noteId) {
    const notes = loadFromStorage(NOTE_KEY)
    const idx = notes.findIndex(note => note.id === noteId)
    console.log(idx)
    notes.splice(idx, 1)
    saveToStorage(NOTE_KEY, notes)
}


function addNote(txt) {
    const notes = loadFromStorage(NOTE_KEY)
    let note = {
        txt: txt,
        id: makeId()
    }
    notes.unshift(note)
    saveToStorage(NOTE_KEY, notes)
    return Promise.resolve()
}
// diff kindes of notes

function newNoteYoutube(url) {
    const notes = loadFromStorage(NOTE_KEY)
    console.log(url)
    var embededUrl = url.replace('watch?v=', 'embed/')
    let note = {
        id: makeId(),
        youtube: `${embededUrl}`,
    }
    notes.unshift(note)
    saveToStorage(NOTE_KEY, notes)
    return Promise.resolve()
}

function newListNote(li, noteId) {
    const notes = loadFromStorage(NOTE_KEY)
    const idx = notes.findIndex(note => note.id === noteId)
    if (!notes[idx].list) notes[idx].list = []
    notes[idx].list.push({txt:li, id:makeId()})
    console.log(notes[idx]);
    saveToStorage(NOTE_KEY, notes)
    return Promise.resolve()
}

function newNoteImage(url) {
    const notes = loadFromStorage(NOTE_KEY)
    let note = {
        id: makeId(),
        img: url
    }
    notes.unshift(note)
    saveToStorage(NOTE_KEY, notes)
    return Promise.resolve()
}


function getNotes(text) {
    if (!text) {
        let notes = loadFromStorage(NOTE_KEY)
        if (!notes) {
            saveToStorage(NOTE_KEY, gNotes)
            notes = loadFromStorage(NOTE_KEY)
        }

        return Promise.resolve(notes);
    }
   else {
    const notes = loadFromStorage(NOTE_KEY)
    let newNotes = []
    notes.forEach((note) => {
        if(note.txt) {
        if (note.txt.includes(text) && !newNotes.includes(note))
            newNotes.push(note)
        }
        if(note.list) {
            note.list.map((li) => {
                 if (li.txt.includes(text) && !newNotes.includes(note))
                newNotes.push(note)
            } ) }
    })
     
    console.log(newNotes)
    return Promise.resolve(newNotes);
}
}





function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}



// function getNotes() {
//     return gNotes;
// }