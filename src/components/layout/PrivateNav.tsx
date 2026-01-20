import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const PrivateNav = () => {
  const navItems = [
    { to: '/decisions', label: 'Decisions' },
    { to: '/portfolio', label: 'Dashboard' },
    { to: '/profile', label: 'Profile' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-sans tracking-wide transition-colors duration-200',
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome back</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PrivateNav;
