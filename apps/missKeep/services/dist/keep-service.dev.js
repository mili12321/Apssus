"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keepService = void 0;
var keepService = {
  addNote: addNote,
  getNotes: getNotes,
  deleteNote: deleteNote
};
exports.keepService = keepService;
var gNotes = [{
  txt: 'hello react',
  id: makeId()
}];

function noteById(noteId) {
  var note = gNotes.find(function (note) {
    return note.id === noteId;
  });
}

function deleteNote(noteId) {
  var idx = gNotes.findIndex(function (note) {
    return note.id === noteId;
  });
  console.log(idx);
  gNotes.splice(idx, 1);
}

function addNote(txt) {
  var note = {
    txt: txt,
    id: makeId()
  };
  gNotes.unshift(note);
}

function getNotes() {
  return gNotes;
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