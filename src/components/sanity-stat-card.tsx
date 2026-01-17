import { Wifi } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { cn, resolveLocalizedValue } from "@/lib/utils";
import type { StatCard as StatCardType } from "@/sanity/types";
import { Card, CardContent } from "./ui/card";

interface SanityStatCardProps
  extends Omit<React.ComponentProps<typeof Card>, "children"> {
  statCard?: StatCardType | null;
  locale?: string;

  contentClassName?: string;

  iconContainerClassName?: string;
  iconClassName?: string;

  labelClassName?: string;

  valueContainerClassName?: string;
  valuePrefixClassName?: string;
  valueSuffixClassName?: string;
  valueClassName?: string;
}

export function SanityStatCard({
  statCard,
  locale = "en",
  className,
  contentClassName,
  iconContainerClassName,
  iconClassName,
  labelClassName,
  valueContainerClassName,
  valuePrefixClassName,
  valueSuffixClassName,
  valueClassName,
  ...props
}: SanityStatCardProps) {
  if (!statCard || !statCard.value) return null;

  const { icon, value, label, valuePrefix, valueSuffix } = statCard;

  const iconElement = icon ? (
    <DynamicIcon name={icon} className={iconClassName} />
  ) : null;
  const labelElement = label ? resolveLocalizedValue(label, locale) : null;

  const valuePrefixElement = valuePrefix
    ? resolveLocalizedValue(valuePrefix, locale)
    : null;
  const valueSuffixElement = valueSuffix
    ? resolveLocalizedValue(valueSuffix, locale)
    : null;

  const valueElement = (
    <div
      className={cn(
        "text-2xl flex items-center gap-1 font-semibold text-foreground",
        valueContainerClassName,
      )}
    >
      {valuePrefixElement && (
        <p className={valuePrefixClassName}>{valuePrefixElement}</p>
      )}

      <p className={valueClassName}>{value}</p>

      {valueSuffixElement && (
        <p className={valueSuffixClassName}>{valueSuffixElement}</p>
      )}
    </div>
  );

  return (
    <Card className={cn(className)} {...props}>
      <CardContent
        className={cn(
          "flex flex-col items-center gap-3 text-center",
          contentClassName,
        )}
      >
        {iconElement && (
          <div
            className={cn(
              "flex items-center justify-center",
              iconContainerClassName,
            )}
          >
            {iconElement}
          </div>
        )}

        {valueElement}
        {labelElement && (
          <p className={cn("text-sm text-muted-foreground", labelClassName)}>
            {labelElement}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
