import { LocalizedText } from "@/components/localized-text";
import type { LocalizedValue } from "@/lib/utils";

interface MembershipHeaderProps {
  title?: LocalizedValue;
  subtitle?: LocalizedValue;
}

export function MembershipHeader({ title, subtitle }: MembershipHeaderProps) {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        <LocalizedText text={title} enablePaintedText={true} paintCount="35%" />
      </h1>

      <LocalizedText
        text={subtitle}
        className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg"
      />
    </div>
  );
}
