import type React from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Button as SanityButtonType } from "@/sanity/types";
import { LocalizedText } from "./localized-text";
import { SanityIcon } from "./sanity-icon";
import { Button } from "./ui/button";

interface SanityButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "children"> {
  button?: SanityButtonType | null;

  textClassName?: string;
  linkClassName?: string;
  iconProps?: Omit<React.ComponentProps<typeof SanityIcon>, "icon">;
}

export function SanityButton({
  button,
  textClassName,
  linkClassName,
  iconProps,
  className,
  ...props
}: SanityButtonProps) {
  if (!button) return null;

  const {
    text,
    href,
    variant,
    className: sanityButtonClassName,
    icon,
    iconPosition,
  } = button;

  const Icon = <SanityIcon icon={icon} {...iconProps} />;

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <Link href={href} className={linkClassName}>
        {children}
      </Link>
    ) : (
      children
    );

  return (
    <Wrapper>
      <Button
        variant={variant}
        className={cn(className, sanityButtonClassName)}
        {...props}
      >
        {Icon && iconPosition === "left" && Icon}
        <LocalizedText text={text} className={textClassName} />
        {Icon && iconPosition === "right" && Icon}
      </Button>
    </Wrapper>
  );
}
