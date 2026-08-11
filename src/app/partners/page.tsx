import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import { contentPages } from "@/data/pages";

const page = contentPages.partners;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function Page() {
  const highlights = "highlights" in page ? Array.from(page.highlights as readonly string[]) : [];

  return (
    <ContentPage
      title={page.title}
      description={page.description}
      breadcrumbLabel={page.breadcrumbLabel}
      features={page.features.map((item) => ({ ...item }))}
      highlights={highlights}
      ctaLabel={page.ctaLabel}
      ctaHref={page.ctaHref}
    />
  );
}
