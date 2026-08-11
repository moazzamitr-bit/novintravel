import type { Metadata } from "next";
import type { ServiceType } from "@/components/search/types";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceSearchEmbed } from "@/components/search/ServiceSearchEmbed";
import { Card } from "@/components/ui/Card";

export interface ServicePageContent {
  slug: string;
  title: string;
  description: string;
  serviceType: ServiceType;
  features: { title: string; description: string }[];
  metaTitle?: string;
  metaDescription?: string;
}

export function buildServiceMetadata(page: ServicePageContent): Metadata {
  return {
    title: page.metaTitle ?? page.title,
    description: page.metaDescription ?? page.description,
  };
}

export function ServiceLandingPage({ page }: { page: ServicePageContent }) {
  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        breadcrumbs={[{ label: page.title }]}
      />
      <div className="container-page -mt-6 pb-4 sm:-mt-8">
        <ServiceSearchEmbed initialService={page.serviceType} />
      </div>
      <section className="container-page section-spacing !pt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.features.map((feature) => (
            <Card key={feature.title} className="p-5">
              <h2 className="text-[17px] font-bold text-novin-text">
                {feature.title}
              </h2>
              <p className="mt-2 text-[14px] leading-7 text-novin-text-secondary">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
