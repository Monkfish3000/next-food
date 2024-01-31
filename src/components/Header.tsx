import Link from 'next/link';

import logo from '@/assets/logo.jpg';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-12 px-10 md:py-8 md:px-10">
      <Link
        className="flex items-center justify-center gap-8 font-bold uppercase text-2xl text-custom-gray"
        href="/"
      >
        <img
          src={logo.src}
          alt="A plate with all the delicious Monkfish food"
        />
      </Link>
      <nav>
        <ul className="list-none m-0 p-0 flex gap-6 text-xl">
          <li>
            <Link className="link" href="/meals">
              Choose meal...
            </Link>
          </li>
          <li>
            <Link className="link" href="/community">
              Monkfish Foodies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
