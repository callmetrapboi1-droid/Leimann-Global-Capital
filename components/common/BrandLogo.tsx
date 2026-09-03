interface BrandLogoProps {
  className?: string;
  size?: "nav" | "footer" | "intro" | "compact";
}

export default function BrandLogo({
  className = "",
  size = "nav",
}: BrandLogoProps) {
  return (
    <span
      className={`brand-logo brand-logo--${size} ${className}`}
      aria-label="Leimann Global Capital"
    >
      <span className="brand-logo__name" aria-hidden="true">
        LEIMANN
      </span>
      <span className="brand-logo__descriptor" aria-hidden="true">
        GLOBAL CAPITAL
      </span>
    </span>
  );
}
