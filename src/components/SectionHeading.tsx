interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  tag,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      }`}
    >
      {tag && (
        <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-3">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
