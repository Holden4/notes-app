

function noteListTest() {
  var noteList = NoteList();
  noteList.addNote("test1");
  assert.isTrue(noteList.getNotes()[0].getText() === "test1");
}

noteListTest();
