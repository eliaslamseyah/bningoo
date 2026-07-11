import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Bningoo
        </h1>
        <p className="max-w-md text-lg text-neutral-500">
          B2B office food, delivered.
        </p>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
        <p className="mt-8 text-sm text-neutral-400">
          Gen 2 &middot; Coming soon
        </p>
      </div>
    </main>
  );
}
