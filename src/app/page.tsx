import Example from "@/components/example";

export default async function Home() {
  return (
    <main className="flex flex-col gap-6 p-6 justify-center items-center">
      <h1 className="text-3xl text-bold">Hello to NextJs 14 template</h1>
      <Example></Example>
    </main>
  );
}
