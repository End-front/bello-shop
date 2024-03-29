import { SectionHeroWithMenu } from "@/widgets/section-hero";
import { SectionCatalogProducts } from "@/widgets/section-catalog";
import { SectionBenefit } from "@/widgets/section-benefit";
import { SectionContacts } from "@/widgets/section-contacts";

export default function Home() {
  return (
    <>
      <SectionHeroWithMenu />
      <SectionCatalogProducts />
      <SectionBenefit />
      <SectionContacts />
    </>
  );
}
