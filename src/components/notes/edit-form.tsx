'use client';

import { useState } from 'react';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { editNote, selectNoteById } from '@/lib/redux/features/notesSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { notFound, useRouter } from 'next/navigation';

export default function EditNoteForm({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const noteBefore = useAppSelector((state) => selectNoteById(state, id));
  if (!noteBefore) {
    notFound();
  }
  const [note, setNote] = useState<string>(noteBefore?.text || '');
  const [error, setError] = useState<string | null>(null);
  const createNoteHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (note.length === 0) {
      setError('Note cannot be empty!');
      return;
    }
    if (note === noteBefore?.text) {
      setError('Note text still the same!');
      return;
    }
    dispatch(editNote({ id, text: note }));
    setNote('');
    router.push('/');
  };
  return (
    <form method="post" onSubmit={createNoteHandler}>
      {error && <p className="text-red-400 text-sm font-mono my-3">{error}</p>}
      <div className="w-full flex items-center gap-2 mb-2">
        <Input
          placeholder="Enter new note"
          type="text"
          name="note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
}
