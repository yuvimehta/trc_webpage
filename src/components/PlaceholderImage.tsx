import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function PlaceholderImage({
  label,
  aspectRatio = "16/9",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-lg border border-border bg-card overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 dot-grid-subtle" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent" />
      <ImageIcon size={36} className="text-muted-dark/50 mb-3 relative z-10" />
      <span className="text-xs text-muted-dark font-mono uppercase tracking-wider relative z-10">
        {label}
      </span>
    </div>
  );
}
