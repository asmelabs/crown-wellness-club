import { PaintedText } from "@/components/painted-text";

interface ScaleHeaderProps {
  title?: string;
  subtitle?: string;
}

export function ScaleHeader({ title, subtitle }: ScaleHeaderProps) {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        <PaintedText text={title ?? "Impressive Scale"} />
      </h1>
      <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
        {subtitle ??
          "First interactive fitness in Azerbaijan luxury wellness club sets unprecedented standards with world-class facilities and cultural excellence."}
      </p>
    </div>
  );
}
