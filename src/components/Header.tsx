import Link from 'next/link';

import logo from '@/assets/logo.jpg';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <img
          src={logo.src}
          alt="A plate with all the delicious Monkfish food"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Choose meal...</Link>
          </li>
          <li>
            <Link href="/community">Monkfish Foodies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
