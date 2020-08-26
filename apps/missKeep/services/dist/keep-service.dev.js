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
  newNoteImage: newNoteImage
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
} //pinNote


function PinNote(noteId) {
  var notes = loadFromStorage(NOTE_KEY);
  var idx = notes.findIndex(function (note) {
    return note.id === noteId;
  });
  var next = notes[idx];
  notes.splice(idx, 1);
  notes.unshift(next);
  notes[0].pinned = true;
  saveToStorage(NOTE_KEY, notes);
}

var gNotes = [{
  txt: 'hello react',
  id: makeId()
}];

function noteById(noteId) {}

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
    txt: null,
    id: makeId(),
    youtube: "".concat(embededUrl)
  };
  notes.unshift(note);
  saveToStorage(NOTE_KEY, notes);
  return Promise.resolve();
}

function newNoteImage(url) {
  var notes = loadFromStorage(NOTE_KEY);
  var note = {
    txt: null,
    id: makeId(),
    img: url
  };
  notes.unshift(note);
  saveToStorage(NOTE_KEY, notes);
  return Promise.resolve();
}

function getNotes() {
  var notes = loadFromStorage(NOTE_KEY);

  if (!notes) {
    saveToStorage(NOTE_KEY, gNotes);
    notes = loadFromStorage(NOTE_KEY);
  }

  return Promise.resolve(notes);
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