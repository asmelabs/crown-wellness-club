import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getSettings } from "@/lib/get-settings";

export async function Footer() {
  const { socialLinks } = await getSettings();

  const socials = {
    facebook: {
      Icon: Facebook,
      href: socialLinks?.facebook || "",
    },
    instagram: {
      Icon: Instagram,
      href: socialLinks?.instagram || "",
    },
    youtube: {
      Icon: Youtube,
      href: socialLinks?.youtube || "",
    },
  };

  const filteredSocials = Object.values(socials).filter(
    (social) => social.href,
  );

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Crown Wellness Club. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {filteredSocials.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <Button size="icon" variant="ghost" aria-label={social.href}>
                <social.Icon className="size-4.5" />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
