import type { ServicesDTO } from "./services";
import type { ReviewsDTO } from "./reviews";
import type { PricingDTO } from "./pricing";
import type { CasesDTO } from "./cases";
import type { HeroDTO } from "./hero";
import type { FaqDTO } from "./faq";

export type HomePageDTO = {
  hero: HeroDTO;
  services: ServicesDTO;
  cases: CasesDTO;
  reviews: ReviewsDTO;
  pricing: PricingDTO;
  faq: FaqDTO;
};
