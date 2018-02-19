
const defaultState = {
  noteStorage: [],
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
      return ({ ...state, noteStorage: [...state, actions.payload] });
    case 'EDIT':
      return (editNotes(state, actions.payload));
    default:
      return state;
  }
};

export default saveState;

