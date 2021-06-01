import List from "../../components/ui/list/List";

export default function Deltagere() {
  // fetch Data => then map() data as props through List components
  // Data is safe in Pages folder and is not seen by the client
  return (
    <div className="contentContainerMargin">
      <h1>deltagere</h1>
      <p>Her kan du sortere og administrere løbets deltagere</p>
      <List />
    </div>
  );
}
