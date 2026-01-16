interface EventHeaderProps {
  title?: string;
  subtitle?: string;
}

export function EventHeader({ title, subtitle }: EventHeaderProps) {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        {title ?? "Upcoming Events"}
      </h1>
      <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
        {subtitle ??
          "Join our exciting upcoming events and be part of the Crown Wellness community experience."}
      </p>
    </div>
  );
}
