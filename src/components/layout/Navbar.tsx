'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItem {
  name: string;
  href: string;
  submenu?: NavItem[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    submenu: [
      { name: 'About Glorious', href: '/about/about-glorious' },
      { name: 'Director message', href: '/about/director-message' },
      { name: 'Why Glorious Courses', href: '/about/why-glorious' },
      { name: 'Academic at Glorious', href: '/about/academic-at-glorious' },
    ],
  },
  {
    name: 'Courses',
    href: '/courses',
    submenu: [{ name: 'Engineering', href: '/engineering' }],
  },
  {
    name: 'Results',
    href: '/results',
    submenu: [
      { name: 'JEE', href: '/results/jee' },
      { name: 'NEET', href: '/results/neet' },
      { name: '12th Board', href: '/results/12th-board' },
      { name: 'CET', href: '/results/cet' },
    ],
  },
  {
    name: 'Testimonials',
    href: '/testimonials',
    submenu: [
      { name: 'Students', href: '/testimonials/students' },
      { name: 'Parents', href: '/testimonials/parents' },
    ],
  },
  {
    name: 'Programs',
    href: '/programs',
    submenu: [
      { name: 'Class room', href: '/programs/class-room' },
      { name: 'Residential', href: '/programs/residential' },
      { name: 'Engineering (11th Appearing)', href: '/programs/engineering-11' },
      { name: 'Engineering (12th Appearing)', href: '/programs/engineering-12' },
      { name: 'Engineering (12th Pass)', href: '/programs/engineering-pass' },
      { name: 'Medical (11th Appearing)', href: '/programs/medical-11' },
      { name: 'Medical (12th Appearing)', href: '/programs/medical-12' },
      { name: 'Medical (12th Pass)', href: '/programs/medical-pass' },
      { name: 'Class 11 (CBSE/State Board)', href: '/programs/class-11' },
      { name: 'Class 12 (CBSE/State Board)', href: '/programs/class-12' },
      { name: 'MHT CET', href: '/programs/mht-cet' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const handleSubmenuToggle = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const renderNavItem = (item: NavItem, isMobile = false) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const itemIsActive = isActive(item.href);

    if (hasSubmenu && !isMobile) {
      return (
        <Menu key={item.name} as="div" className="relative inline-block">
          <MenuButton
            className={classNames(
              itemIsActive
                ? 'text-secondary font-bold'
                : 'hover:text-secondary-dark font-medium text-gray-700 hover:bg-white/2',
              'flex items-center gap-1 rounded-md px-3 py-2 text-sm'
            )}
          >
            {item.name}
            <ChevronDownIcon className="size-4" />
          </MenuButton>
          <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
            {item.submenu &&
              item.submenu.map(subitem => (
                <MenuItem key={subitem.name}>
                  <Link
                    href={subitem.href}
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    {subitem.name}
                  </Link>
                </MenuItem>
              ))}
          </MenuItems>
        </Menu>
      );
    }

    if (hasSubmenu && isMobile) {
      return (
        <div key={item.name}>
          <button
            onClick={() => handleSubmenuToggle(item.name)}
            className={classNames(
              itemIsActive
                ? 'text-secondary font-bold'
                : 'hover:text-secondary-dark font-medium text-gray-700 hover:bg-white/5',
              'flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base'
            )}
          >
            {item.name}
            <ChevronDownIcon
              className={classNames(
                'size-4 transition-transform',
                openSubmenu === item.name ? 'rotate-180' : ''
              )}
            />
          </button>
          {openSubmenu === item.name && (
            <div className="space-y-1 pl-4">
              {item.submenu &&
                item.submenu.map(subitem => (
                  <Link
                    key={subitem.name}
                    href={subitem.href}
                    className="hover:text-secondary-dark block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-white/5"
                  >
                    {subitem.name}
                  </Link>
                ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.name}
        href={item.href}
        aria-current={itemIsActive ? 'page' : undefined}
        className={classNames(
          itemIsActive
            ? 'text-secondary font-bold'
            : 'hover:text-secondary-dark font-medium text-gray-700 hover:bg-white/5',
          'rounded-md px-3 py-2 text-sm'
        )}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-4 left-1/2 z-50 flex w-full max-w-5xl -translate-x-1/2 transform items-center justify-center rounded-full bg-white px-6 py-3 shadow-sm md:py-1"
    >
      <div className="relative flex h-16 w-full items-center justify-center">
        <div className="absolute inset-y-0 left-4 flex items-center sm:hidden">
          {/* Mobile menu button */}
          <DisclosureButton className="group hover:text-secondary-dark relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
          </DisclosureButton>
        </div>

        <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-center">
          <div className="flex shrink-0 items-center gap-6">
            <Link href="/">
              <img alt={'Glorious Courses'} src={'/logo.jpg'} className="h-10 w-auto" />
            </Link>

            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navItems.map(item => renderNavItem(item, false))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navItems.map(item => renderNavItem(item, true))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
