import Image from "next/image";
import { type LocalizedValue, resolveLocalizedValue } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import type {
  Banner as SanityBannerType,
  Button as SanityButtonType,
  Link as SanityLinkType,
} from "@/sanity/types";
import { Banner } from "./banner";
import { SanityButton } from "./sanity-button";

interface SanityBannerProps {
  banner?:
    | (Omit<
        SanityBannerType,
        | "_type"
        | "title"
        | "subtitle"
        | "_id"
        | "_createdAt"
        | "_updatedAt"
        | "_rev"
        | "buttons"
      > & {
        title?: LocalizedValue;
        subtitle?: LocalizedValue;
        description?: LocalizedValue;
        buttons?: Array<
          Omit<
            SanityButtonType,
            "_type" | "_createdAt" | "_updatedAt" | "_rev" | "text"
          > & {
            text?: LocalizedValue;
            link?: Omit<SanityLinkType, "text"> & {
              text?: LocalizedValue;
            };
          }
        >;
      })
    | null;
}

export function SanityBanner({ banner }: SanityBannerProps) {
  if (!banner) return null;

  const { title, subtitle, description, image, buttons } = banner;

  const titleContent = title ? resolveLocalizedValue(title) : "";
  const subtitleContent = subtitle ? resolveLocalizedValue(subtitle) : "";
  const descriptionContent = description
    ? resolveLocalizedValue(description)
    : "";
  const imageAlt = titleContent ?? subtitleContent ?? "Banner Image";
  const header = image ? (
    <Image
      src={urlFor(image).url()}
      alt={imageAlt}
      width={1000}
      height={1000}
    />
  ) : null;

  const footer =
    buttons && buttons.length > 0 ? (
      <div className="flex justify-center gap-2">
        {buttons.map((button) => (
          <SanityButton key={titleContent} button={button} />
        ))}
      </div>
    ) : null;

  return (
    <Banner
      header={header}
      title={titleContent}
      subtitle={subtitleContent}
      description={descriptionContent}
      footer={footer}
    />
  );
}
