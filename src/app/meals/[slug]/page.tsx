import Image from 'next/image';

export default function MealDetails({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{params.slug}</p>
    </main>
  );
}
