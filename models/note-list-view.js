"use strict";

var NoteListView = (function() {

  return {
    printNotes: function(arrayOfNotes) {
      var str = "<ul>";
      for (var i = 0; i < arrayOfNotes.length; i++) {
        str += "<li>" + arrayOfNotes[i].getText() + "</li>";
      }
      str += "</ul>"
      return str;
    }
  }
});
  
