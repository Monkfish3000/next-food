import Link from 'next/link';

import styles from './page.module.css';
import ImageSlideshow from '@/components/images/ImageSlideshow';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div className="flex flex-col space-y-14">
          <div className={styles.hero}>
            <h1>MonkFish Food Love Monkfish Foodies</h1>
            <p>Tasting and sharing all the different food</p>
          </div>
          <div className={styles.cta}>
            <Link className="hero-link" href="/community">
              Join Us!
            </Link>
            <Link className="hero-link custom-gradient" href="/meals">
              Browse meals...
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
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
