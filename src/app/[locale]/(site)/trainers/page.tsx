export default function TrainersPage() {
  return (
    <div>
      <TrainersList />
    </div>
  );
}

function TrainersList() {
  return (
    <div>
      <TrainerCard />
      <TrainerCard />
      <TrainerCard />
    </div>
  );
}

function TrainerCard() {
  return <div>TrainerCard</div>;
}
