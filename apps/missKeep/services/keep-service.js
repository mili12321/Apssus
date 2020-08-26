export const keepService = {
    addNote,
    getNotes,
    deleteNote
}



var gNotes = [{
    txt: 'hello react',
    id: makeId()
}]



function noteById(noteId) {
  const note = gNotes.find(note => note.id === noteId)
  
  
}




function deleteNote(noteId) {
const idx = gNotes.findIndex(note => note.id === noteId)
console.log(idx)
gNotes.splice(idx, 1)
}


function addNote(txt) {
    let note = {
        txt: txt,
        id: makeId()
    }
    gNotes.unshift(note)
}

function getNotes() {
    return gNotes
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