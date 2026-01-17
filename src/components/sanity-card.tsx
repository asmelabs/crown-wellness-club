import type { Card as SanityCardType } from "@/sanity/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface SanityCardProps {
  card?: SanityCardType | null;
}

export function SanityCard({ card }: SanityCardProps) {
  if (!card) return null;

  const {
    image,
    icon,
    primaryColor,
    description,
    subtitle,
    buttons,
    tags,
    title,
  } = card;

  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
