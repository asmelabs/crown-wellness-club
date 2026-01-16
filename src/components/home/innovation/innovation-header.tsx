import { PaintedText } from "@/components/painted-text";

interface InnovationHeaderProps {
  title?: string;
  subtitle?: string;
}

export function InnovationHeader({ title, subtitle }: InnovationHeaderProps) {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        <PaintedText
          text={title ?? "INNOVATION & TECHNOLOGY"}
          paintCount="35%"
        />
      </h1>
      <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
        {subtitle ??
          "Experience the future of wellness with cutting-edge technology that personalizes your journey, enhances your performance, and ensures your safety at every step."}
      </p>
    </div>
  );
}
