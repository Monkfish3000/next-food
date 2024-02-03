import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="flex gap-4 m-3 w-9/10 max-w-custom">
        <div className="w-5 h-5 text-customGray"></div>
        <div>
          <div className="hero">
            <h1 className="font-bold text-4xl tracking-wide uppercase montserrat gradient-text">
              MonkFish Food Love Monkfish Foodies
            </h1>
            <p>Tasting and sharing all the different food</p>
          </div>
          <div className="text-3xl flex gap-0">
            <Link className="hero-link custom-gradient" href="/community">
              Join Us!
            </Link>
            <Link className="hero-link custom-gradient" href="/meals">
              Browse meals...
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="home-page-section">
          <h2>How it works</h2>
          <p>
            Monkfish Food is a culinary haven where enthusiasts swap their top
            meal secrets. It is a treasure trove for uncovering new flavors, and
            a hub for mingling with fellow gastronomy aficionados.
          </p>
          <p>
            Monkfish Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className="home-page-section">
          <h2>Why Monkfish Food?</h2>
          <p>
            Monkfish Food is a culinary haven where enthusiasts swap their top
            meal secrets. It is a treasure trove for uncovering new flavors, and
            a hub for mingling with fellow gastronomy aficionados.
          </p>
          <p>
            Monkfish Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
