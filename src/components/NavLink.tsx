'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  pathName: string;
  text: string;
}

const NavLink = ({ pathName, text }: NavLinkProps) => {
  const path = usePathname();
  return (
    <Link
      className={`link hover:nav-link ${
        path.startsWith(`/${pathName}`) ? 'nav-link' : ''
      }`}
      href={`/${pathName}`}
    >
      {text}
    </Link>
  );
};

export default NavLink;
