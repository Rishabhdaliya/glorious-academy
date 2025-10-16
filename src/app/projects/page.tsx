import Navbar, { type NavItem } from '';

export default function Projects() {
  const navigationItems: NavItem[] = [
    { name: 'Dashboard', href: '/' },
    { name: 'Team', href: '/team' },
    {
      name: 'Projects',
      href: '/projects',
      submenu: [
        { name: 'Active Projects', href: '/projects/active' },
        { name: 'Archived Projects', href: '/projects/archived' },
        { name: 'Create New', href: '/projects/create' },
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
      submenu: [
        { name: 'Documentation', href: '/resources/docs' },
        { name: 'API Reference', href: '/resources/api' },
        { name: 'Support', href: '/resources/support' },
      ],
    },
    { name: 'Calendar', href: '/calendar' },
  ];

  const profileMenuItems = [
    { label: 'Your profile', href: '/profile' },
    { label: 'Settings', href: '/settings' },
    { label: 'Sign out', href: '/' },
  ];

  return (
    <main>
      <Navbar
        navItems={navigationItems}
        profileMenuItems={profileMenuItems}
        onNotificationClick={() => console.log('Notifications clicked')}
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="mt-4 text-gray-600">View and manage all your projects in one place.</p>
      </div>
    </main>
  );
}
