
const defaultState = {
  noteStorage: [],
  key: 1,
};

const saveNotes = (currentState, newNote) => {
  const oldNotesArray = currentState.noteStorage;
  const key = currentState.key + 1;
  oldNotesArray[currentState.key - 1] = newNote;
  return {
    noteStorage: oldNotesArray,
    key,
  };
};

const editNotes = (prevState, modifiedNote) => {
  const oldKey = modifiedNote.key;
  const note = modifiedNote.noteStorage;
  const newState = prevState.noteStorage;
  newState[oldKey - 1] = note;
  return newState;
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

