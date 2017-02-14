"use strict.";

var NoteList = (function () {

  var noteMessages = [];

  return {

    addNote: function (text) {
      var note = Note();
      note.setText(text);
      noteMessages.push(note);
    },

    getNotes: function () {
      return noteMessages;
    }
  };

});
