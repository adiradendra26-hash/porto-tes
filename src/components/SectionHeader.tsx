interface SectionHeaderProps {
  number: string;
  title: string;
  note?: string;
}

export default function SectionHeader({ number, title, note }: SectionHeaderProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="label text-accent">{number}</span>
        <h2 className="font-sans text-h2 font-medium tracking-tightest text-offwhite-100">
          {title}
        </h2>
      </div>
      {note && (
        <p className="mt-3 max-w-text text-sm leading-relaxed text-muted">
          {note}
        </p>
      )}
    </div>
  );
}
