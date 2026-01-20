import Logo from './Logo';

const LogoOnlyNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center h-16">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default LogoOnlyNav;
