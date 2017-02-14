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
  noteList.addNote("A-34567890123456789012");
  noteList.addNote("B-34567890123456789012");
  var str = "<ul><li>A-345678901234567890</li><li>B-345678901234567890</li></ul>";
  assert.isTrue(noteListView.printNotes(noteList.getNotes()) === str);
}

function noteViewTest() {
  var note = Note();
  note.setText("test1");
  var noteView = NoteView();
  var string = "<div>test1</div>";
  assert.isTrue(noteView.printNote(note) === string);
}

noteTest();
noteListTest();
noteListViewTest();
noteViewTest();
