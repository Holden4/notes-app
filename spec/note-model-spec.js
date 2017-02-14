function noteAcceptsText(text) {
  note = Note();
  note.setText("test1");
  assert.isTrue(note.getText() === "test1");
}

noteAcceptsText("Hello");
