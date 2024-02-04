import Link from 'next/link';

import NavLink from './NavLink';
import logo from '@/assets/logo.jpg';
import Image from 'next/image';
import HeaderBackground from './HeaderBackground';

const Header = () => {
  return (
    <>
      <HeaderBackground />
      <header className="flex justify-between items-center py-12 px-10 md:py-8 md:px-10">
        <Link
          className="flex items-center justify-center gap-8 uppercase text-3xl text-customGray"
          href="/"
        >
          <Image
            className="h-36 w-36 rounded-full drop-shadow-2xl"
            src={logo}
            alt="A plate with all the delicious Monkfish food"
            priority
          />
          MonkFish Food
        </Link>
        <nav>
          <ul className="list-none mr-36 p-0 gap-4 flex text-xl">
            <li>
              <NavLink pathName={'meals'} text={'Choose meal...'} />
            </li>
            <li>
              <NavLink pathName={'community'} text={'Monkfish Foodies'} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
