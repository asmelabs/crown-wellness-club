interface MembershipAnnocProps {
  text?: string;
}

export function MembershipAnnoc({ text }: MembershipAnnocProps) {
  if (!text) return null;

  return (
    <div className="mt-10 flex justify-center">
      <div className="rounded-full border border-primary/30 bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
        {text}
      </div>
    </div>
  );
}
