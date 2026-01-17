import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import { getMetaSettings } from "@/lib/get-settings";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getMetaSettings();

  return {
    title: settings.defaultSeo.title,
    description: settings.defaultSeo.description,
    openGraph: {
      title: settings.defaultSeo.ogTitle,
      description: settings.defaultSeo.ogDescription,
      images: settings.defaultSeo.ogImageUrl
        ? [{ url: settings.defaultSeo.ogImageUrl }]
        : undefined,
    },
  };
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense>
        <Navbar />
      </Suspense>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
