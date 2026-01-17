import Button from "../ui/Button";

export default function NoteActions() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline">Archive Note</Button>
      <Button variant="danger">Delete Note</Button>
    </div>
  );
}
