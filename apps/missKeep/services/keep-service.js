export const keepService = {
    addNote,
    getNotes,
    deleteNote,
    PinNote,
    newNoteYoutube,
    newNoteImage,
    newNoteAudio,
    newListNote
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
    txt: 'hello react',
    id: makeId()
}]



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
    console.log(li, noteId);
    const notes = loadFromStorage(NOTE_KEY)
    const idx = notes.findIndex(note => note.id === noteId)
    if(!notes[idx].list) notes[idx].list = []
    notes[idx].list.push(li)
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


function getNotes() {
    let notes = loadFromStorage(NOTE_KEY)
    if (!notes) {
        saveToStorage(NOTE_KEY, gNotes)
        notes = loadFromStorage(NOTE_KEY)
    }

    return Promise.resolve(notes);
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