import EditNoteForm from '@/components/notes/edit-form';

export default async function EditNotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const noteId = (await params).id;
  return (
    <>
      <h2 className="text-xl font-medium font-mono mb-2 text-center">
        [ Edit Note ]
      </h2>
      <EditNoteForm id={noteId} />
    </>
  );
}
