function noteAcceptsText() {
  var note = Note();
  note.setText("test1");
  assert.isTrue(note.getText() === "test1");
}

noteAcceptsText();
