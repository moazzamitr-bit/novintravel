import {
  ServiceLandingPage,
  buildServiceMetadata,
} from "@/components/layout/ServiceLandingPage";
import { servicePages } from "@/data/pages";

const page = servicePages.stays;

export const metadata = buildServiceMetadata(page);

export default function Page() {
  return <ServiceLandingPage page={page} />;
}
