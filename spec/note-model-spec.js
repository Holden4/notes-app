function noteAcceptsText() {
  var note = Note();
  note.setText("test1");
  assert.isTrue(note.getText() === "test1");
}

noteAcceptsText();

// function NoteListView() {
//   this.noteList = new NoteList();
// }
//
// NoteListView.prototype.viewNotes = function() {
//   var rstr = "<ul>";
//   var arr = this.noteList.getNotes();
//   for ( var i = 0 ; i < arr.length; i++ ) {
//     rstr = rstr + "<li>" + arr[i].getText() + "</li>";
//   }
//   rstr += "</ul>";
//   return rstr;
// }
//
//
// var assert = {
//   isTrue: function(assertionToCheck) {
//     if (!assertionToCheck) {
//       throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//     }
//     console.log(assertionToCheck + "test passed!")
//   }
// }
//
// function testReturnsNoteText() {
//   var note = new Note();
//   note.setText("this is the first note");
//   assert.isTrue(note.getText() === "this is the first note");
// }
//
// function testReturnsNotesList() {
//   var noteList = new NoteList();
//   noteList.addNote("this is the first note");
//   var arr = noteList.getNotes();
//   assert.isTrue(arr[0].getText() === "this is the first note");
// }
//
// function testViewNotes() {
//   var noteListView = new NoteListView();
//   noteListView.noteList.addNote("this is the first note");
//   noteListView.noteList.addNote("this is the second note");
//   var str = noteListView.viewNotes();
//   assert.isTrue(str === "<ul><li>this is the first note</li><li>this is the second note</li></ul>");
// }
//
//
// testReturnsNoteText();
// testReturnsNotesList();
// testViewNotes();
