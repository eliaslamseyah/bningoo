export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Bningoo Dashboard
        </h1>
        <p className="max-w-md text-lg text-neutral-500">
          Admin &amp; operations panel.
        </p>
        <p className="mt-8 text-sm text-neutral-600">
          Gen 2 &middot; Coming soon
        </p>
      </div>
    </main>
  );
}
