import { Package, PartyPopper } from "lucide-react";
import { LocalizedText } from "@/components/localized-text";
import type { LocalizedValue } from "@/lib/utils";

interface MembershipAnnocProps {
  text?: LocalizedValue;
}

export function MembershipAnnoc({ text }: MembershipAnnocProps) {
  if (!text) return null;

  return (
    <div className="mt-10 flex justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="rounded-full border border-primary/30 bg-primary/10 px-6 py-2 text font-semibold text-primary flex items-center gap-2">
        <PartyPopper className="size-5" />
        <LocalizedText text={text} />
      </div>
    </div>
  );
}
