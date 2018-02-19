
const defaultState = {
  noteStorage: [],
  key: 1,
};

const saveNotes = (currentState, newNote) => {
  const oldNotesArray = currentState.noteStorage;
  const key = currentState.key + 1;
  oldNotesArray.push(newNote);
  console.log('new Array: ', oldNotesArray);
  return {
    noteStorage: oldNotesArray,
    key,
  };
};

const editNotes = (prevState, modifiedNote) => {
  const oldKey = modifiedNote.key;
  console.log(oldKey);
  const note = modifiedNote.newNote;
  const newState = prevState.noteStorage;
  newState[oldKey - 1] = note;
  console.log(newState);
  return {
    noteStorage: newState,
    key: prevState.key,
  };
};

const saveState = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'SAVE':
      return (saveNotes(state, actions.payload));
    case 'EDIT':
      return (editNotes(state, actions.payload));
    default:
      return state;
  }
};

export default saveState;
