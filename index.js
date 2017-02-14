window.onload = function() {
  var noteListView = NoteListView();
  var noteList = NoteList();
  noteList.addNote("Favourite drink: seltzer");
  document.getElementById("app").innerHTML = noteListView.printNotes(noteList.getNotes());
};
