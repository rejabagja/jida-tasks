import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type Note = {
  id: string;
  text: string;
};
export type Notes = {
  notes: Note[];
};

const initialState: Notes = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<{ note: string }>) => {
      const note: Note = {
        id: String(Date.now()),
        text: action.payload.note,
      };
      state.notes.unshift(note);
    },
    editNote: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = action.payload;
      const noteIndex = state.notes.findIndex((n) => n.id === id);
      if (noteIndex === -1) return;
      state.notes[noteIndex].text = text;
    },

    deleteNote: (state, action: PayloadAction<{ id: string }>) => {
      const noteIndex = state.notes.findIndex(
        (n) => n.id === action.payload.id
      );
      if (noteIndex === -1) return;
      state.notes.splice(noteIndex, 1);
    },
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notes.notes;
export const selectNoteById = (state: RootState, id: string) =>
  state.notes.notes.find((note) => note.id === id);
export default notesSlice.reducer;
