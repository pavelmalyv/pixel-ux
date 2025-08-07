import type { HomePageDTO } from "../dto/homePage";
import { adaptCasesDTO, type Cases } from "./cases";
import { adaptFaqDTO, type Faq } from "./faq";
import { adaptHeroDTO, type Hero } from "./hero";
import { adaptPricingDTO, type Pricing } from "./pricing";
import { adaptReviewsDTO, type Reviews } from "./reviews";
import { adaptServicesDTO, type Services } from "./services";

export type HomePage = {
  hero: Hero;
  services: Services;
  cases: Cases;
  reviews: Reviews;
  pricing: Pricing;
  faq: Faq;
};

export const adaptHomePageDTO = ({
  hero,
  services,
  cases,
  reviews,
  pricing,
  faq,
}: HomePageDTO): HomePage => {
  return {
    hero: adaptHeroDTO(hero),
    services: adaptServicesDTO(services),
    cases: adaptCasesDTO(cases),
    reviews: adaptReviewsDTO(reviews),
    pricing: adaptPricingDTO(pricing),
    faq: adaptFaqDTO(faq),
  };
};
