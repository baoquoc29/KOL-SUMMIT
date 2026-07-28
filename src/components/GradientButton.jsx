export default function GradientButton({
  children,
  onClick,
  href,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950';

  const variants = {
    primary:
      'bg-gradient-to-r from-neon-purple via-electric-blue to-cyan-500 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 active:scale-95',
    secondary:
      'border border-white/20 text-white/90 hover:border-neon-purple hover:text-white hover:bg-white/5 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] active:scale-95',
    outline:
      'border border-cyan-400/40 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 active:scale-95',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
