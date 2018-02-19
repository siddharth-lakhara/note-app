export const save = newNote => ({
  type: 'SAVE',
  payload: newNote,
});


export const edit = (newNote, key) => ({
  type: 'EDIT',
  payload: { newNote, key },
});

export default {
  save,
  edit,
};

