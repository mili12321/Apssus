"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keepService = void 0;
var keepService = {
  addNote: addNote,
  getNotes: getNotes,
  deleteNote: deleteNote,
  PinNote: PinNote,
  newNoteYoutube: newNoteYoutube,
  newNoteImage: newNoteImage,
  newNoteAudio: newNoteAudio,
  newListNote: newListNote,
  searchNotes: searchNotes,
  makeId: makeId
}; //storage

exports.keepService = keepService;
var NOTE_KEY = 'notes';

function saveToStorage(key, val) {
  var str = JSON.stringify(val);
  localStorage.setItem(key, str);
}

function loadFromStorage(key) {
  var str = localStorage.getItem(key);
  var val = JSON.parse(str);
  return val;
} //search


function searchNotes(text) {
  console.log(text);
  var notes = loadFromStorage(NOTE_KEY);
  var newNotes = [];
  notes.forEach(function (note) {
    if (note.text === text && !newNotes.includes(note)) newNotes.push(note);
  });
  console.log(newNotes);
  return newNotes;
} //pinNote


function PinNote(noteId) {
  var notes = loadFromStorage(NOTE_KEY);
  var idx = notes.findIndex(function (note) {
    return note.id === noteId;
  });
  var next = notes[idx];
  notes.splice(idx, 1);
  notes.unshift(next);

  if (notes[0].pinned = true) {
    notes[0].pinned = false;
  } else {
    notes[0].pinned = true;
  }

  saveToStorage(NOTE_KEY, notes);
}

var gNotes = [{
  txt: 'hello react',
  id: makeId()
}];

function noteById(noteId) {}

function newNoteAudio(url) {
  var notes = loadFromStorage(NOTE_KEY);
  var note = {
    txt: null,
    id: makeId(),
    audio: url
  };
  notes.unshift(note);
  saveToStorage(NOTE_KEY, notes);
  return Promise.resolve();
}

function deleteNote(noteId) {
  var notes = loadFromStorage(NOTE_KEY);
  var idx = notes.findIndex(function (note) {
    return note.id === noteId;
  });
  console.log(idx);
  notes.splice(idx, 1);
  saveToStorage(NOTE_KEY, notes);
}

function addNote(txt) {
  var notes = loadFromStorage(NOTE_KEY);
  var note = {
    txt: txt,
    id: makeId()
  };
  notes.unshift(note);
  saveToStorage(NOTE_KEY, notes);
  return Promise.resolve();
} // diff kindes of notes


function newNoteYoutube(url) {
  var notes = loadFromStorage(NOTE_KEY);
  console.log(url);
  var embededUrl = url.replace('watch?v=', 'embed/');
  var note = {
    id: makeId(),
    youtube: "".concat(embededUrl)
  };
  notes.unshift(note);
  saveToStorage(NOTE_KEY, notes);
  return Promise.resolve();
}

function newListNote(li, noteId) {
  var notes = loadFromStorage(NOTE_KEY);
  var idx = notes.findIndex(function (note) {
    return note.id === noteId;
  });
  if (!notes[idx].list) notes[idx].list = [];
  notes[idx].list.push({
    txt: li,
    id: makeId()
  });
  saveToStorage(NOTE_KEY, notes);
  return Promise.resolve();
}

function newNoteImage(url) {
  var notes = loadFromStorage(NOTE_KEY);
  var note = {
    id: makeId(),
    img: url
  };
  notes.unshift(note);
  saveToStorage(NOTE_KEY, notes);
  return Promise.resolve();
}

function getNotes(text) {
  if (!text) {
    var notes = loadFromStorage(NOTE_KEY);

    if (!notes) {
      saveToStorage(NOTE_KEY, gNotes);
      notes = loadFromStorage(NOTE_KEY);
    }

    return Promise.resolve(notes);
  } else {
    var _notes = loadFromStorage(NOTE_KEY);

    var newNotes = [];

    _notes.forEach(function (note) {
      if (note.txt) {
        if (note.txt.includes(text) && !newNotes.includes(note)) newNotes.push(note);
      }

      if (note.list) {
        note.list.map(function (li) {
          if (li.txt.includes(text) && !newNotes.includes(note)) newNotes.push(note);
        });
      }
    });

    console.log(newNotes);
    return Promise.resolve(newNotes);
  }
}

function makeId() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
} // function getNotes() {
//     return gNotes;
// }