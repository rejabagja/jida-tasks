'use client';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { selectNotes } from '@/lib/redux/features/notesSlice';
import { Button } from '../ui/button';
import Link from 'next/link';
import { deleteNote } from '@/lib/redux/features/notesSlice';

export default function NoteList() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectNotes);

  return (
    <div className="mt-10 h-[300px] overflow-y-auto">
      {notes.length === 0 && (
        <p className="text-center text-sm text-muted-foreground mt-5">
          No notes yet.
        </p>
      )}
      {notes.map((note) => (
        <div key={note.id} className="my-4 w-full flex items-center">
          <p className="flex-1">{note.text}</p>
          <div className="flex gap-2">
            <Button variant="outline" size={'sm'} asChild>
              <Link href={`/${note.id}/edit`}>Edit</Link>
            </Button>
            <Button
              variant="destructive"
              size={'sm'}
              onClick={() => {
                const confirm = window.confirm(
                  'Are you sure you want to delete this note?'
                );
                if (confirm) {
                  dispatch(deleteNote({ id: note.id }));
                }
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
