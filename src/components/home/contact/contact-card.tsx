import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import type { ContactCardType } from "./types";

interface ContactCardProps {
  card: ContactCardType;
}

export function ContactCard({ card }: ContactCardProps) {
  return (
    <Card key={card.title} className="h-full">
      <CardContent className="flex flex-col gap-3">
        <div className="flex size-12 items-center justify-center rounded-full border border-border/60 bg-muted/40">
          <DynamicIcon
            name={card.icon as IconName}
            className="size-6 text-primary"
          />
        </div>
        <div>
          <p className="text-sm font-semibold">{card.title}</p>
          <p className="text-sm text-muted-foreground">{card.value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
