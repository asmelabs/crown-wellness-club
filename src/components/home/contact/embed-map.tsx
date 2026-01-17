import { Card } from "@/components/ui/card";

interface EmbedMapProps {
  src?: string | null;
}

export function EmbedMap({ src }: EmbedMapProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative h-64 w-full">
        <iframe
          title="Crown Wellness Club Location"
          src={
            src ??
            "https://www.google.com/maps?q=Baku%2C%20Azerbaijan&z=13&output=embed"
          }
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Card>
  );
}
