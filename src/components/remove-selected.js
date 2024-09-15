function RemoveSelected(notes, setNotes) {
  let removedNotes = notes.filter((note) => note.selected);
  setNotes((notes) => notes.filter((note) => !note.selected));
  return removedNotes;
}

export default RemoveSelected;
