import CreateNoteForm from '@/components/notes/create-form';
import NoteList from '@/components/notes/note-list';

export default function Home() {
  return (
    <>
      <CreateNoteForm />
      <NoteList />
    </>
  );
}
