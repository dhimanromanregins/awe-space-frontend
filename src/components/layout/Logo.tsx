import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

const Logo = ({ className = '', showTagline = false }: LogoProps) => {
  return (
    <Link to="/" className={`inline-flex flex-col ${className}`}>
      <span className="font-serif text-2xl tracking-wide text-foreground">
        AweSpace
      </span>
      {showTagline && (
        <span className="text-xs tracking-widest uppercase text-muted-foreground mt-0.5">
          Private Real Estate
        </span>
      )}
    </Link>
  );
};

export default Logo;
