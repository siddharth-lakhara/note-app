export const save = newNote => ({
  type: 'SAVE',
  payload: newNote,
});


export const edit = (newNote, key) => ({
  type: 'EDIT',
  payload: { newNote, key },
});

export const load = newNoteStorage => ({
  type: 'LOAD',
  payload: newNoteStorage,
});

export default {
  save,
  edit,
};

