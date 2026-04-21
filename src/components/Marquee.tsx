import Image from "next/image";

interface ClientLogo {
  name: string;
  logo: string;
}

interface MarqueeProps {
  items: ClientLogo[];
}

export default function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-10 bg-card">
      <div className="flex animate-marquee w-max items-center">
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center justify-center px-10 shrink-0"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={160}
              height={64}
              className="h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
