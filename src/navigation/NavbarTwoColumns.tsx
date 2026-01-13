import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
  hideLogo?: boolean;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div
      className={`transition-opacity duration-700 ${
        props.hideLogo ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Link href="/">{props.logo}</Link>
    </div>

    <nav className="ml-auto">
      <ul className="navbar flex items-center text-lg font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-8;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
