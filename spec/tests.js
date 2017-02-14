function noteTest() {
  var note = Note();
  note.setText("test1");
  assert.isTrue(note.getText() === "test1");
}

function noteListTest() {
  var noteList = NoteList();
  noteList.addNote("test1");
  assert.isTrue(noteList.getNotes()[0].getText() === "test1");
}

function noteListViewTest() {
  var noteListView = NoteListView();
  var noteList = NoteList();
  noteList.addNote("test1");
  noteList.addNote("test2");
  var str = "<ul><li>test1</li><li>test2</li></ul>";
  assert.isTrue(noteListView.printNotes(noteList.getNotes()) === str);
}

noteTest();
noteListTest();
noteListViewTest();
