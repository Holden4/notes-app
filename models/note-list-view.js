"use strict";

var NoteListView = (function() {

  return {
    printNotes: function(arrayOfNotes) {
      var str = "<ul>";
      var tempstring = "";
      for (var i = 0; i < arrayOfNotes.length; i++) {
        tempstring = arrayOfNotes[i].getText().substr(0,20);
        str += "<li>" + tempstring + "</li>";
      }
      str += "</ul>"
      return str;
    }
  }
});
