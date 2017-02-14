"use strict";

function noteViewTest() {
  var note = Note();
  note.setText("test1");
  var noteView = NoteView();

  var string = "<div>test1</div>"
  assert.isTrue(noteView.printNote(note) === str);
}

noteViewTest();
