import { PaintedText } from "@/components/painted-text";

interface CommunityHeaderProps {
  title?: string;
  subtitle?: string;
}

export function CommunityHeader({ title, subtitle }: CommunityHeaderProps) {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        <PaintedText text={title ?? "COMMUNITY & LIFESTYLE"} paintCount="35%" />
      </h1>
      <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
        {subtitle ??
          "Join a vibrant community of wellness enthusiasts where connections are made, friendships are formed, and healthy lifestyles are celebrated together in an atmosphere of cultural respect and shared goals."}
      </p>
    </div>
  );
}
