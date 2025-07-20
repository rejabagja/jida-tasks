'use client';

import { useState } from 'react';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { addNote } from '@/lib/redux/features/notesSlice';
import { useAppDispatch } from '@/lib/redux/hooks';

export default function CreateNoteForm() {
  const dispatch = useAppDispatch();

  const [note, setNote] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const createNoteHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (note.length === 0) {
      setError('Note cannot be empty!');
      return;
    }

    dispatch(addNote({ note }));
    setNote('');
  };
  return (
    <form method="post" onSubmit={createNoteHandler}>
      {error && <p className="text-red-400 text-sm font-mono mb-2">{error}</p>}
      <div className="w-full flex items-center gap-2">
        <Input
          placeholder="Enter new note"
          type="text"
          name="note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
