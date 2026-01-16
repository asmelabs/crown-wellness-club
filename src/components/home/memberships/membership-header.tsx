import { PaintedText } from "@/components/painted-text";

interface MembershipHeaderProps {
  title?: string;
  subtitle?: string;
}

export function MembershipHeader({ title, subtitle }: MembershipHeaderProps) {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        <PaintedText text={title ?? "MEMBERSHIP EXCELLENCE"} paintCount="35%" />
      </h1>
      <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
        {subtitle ??
          `Choose your path to luxury wellness. Each membership is crafted to deliver exceptional value and exclusive experiences in Azerbaijan's premier destination.`}
      </p>
    </div>
  );
}
