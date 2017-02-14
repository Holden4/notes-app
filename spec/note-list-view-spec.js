function noteListViewTest() {
  var noteListView = NoteListView();
  var noteList = NoteList();
  noteList.addNote("test1");
  noteList.addNote("test2");
  var str = "<ul><li>test1</li><li>test2</li></ul>";
  assert.isTrue(noteListView.printNotes(noteList.getNotes()) === str);
}

noteListViewTest();
