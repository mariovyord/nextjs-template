import ExampleDashboard from "./_components/example-dashboard";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6 justify-center items-center">
      <h1 className="text-3xl text-bold">Dashboard page</h1>
      <ExampleDashboard></ExampleDashboard>
    </div>
  );
}
