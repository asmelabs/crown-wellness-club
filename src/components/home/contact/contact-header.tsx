interface ContactHeaderProps {
  title?: string;
  subtitle?: string;
}

export function ContactHeader({ title, subtitle }: ContactHeaderProps) {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        {title ?? "Get In Touch"}
      </h1>
      <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
        {subtitle ??
          `Ready to begin your luxury wellness journey? Contact us today and discover what makes Crown Wellness Club Azerbaijan's premier destination.`}
      </p>
    </div>
  );
}
