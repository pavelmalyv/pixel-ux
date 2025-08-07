import { useGetHomePageQuery } from "../../api/homeApi";

import Hero from "@components/Hero/Hero";
import Pricing from "@components/Pricing/Pricing";
import Faq from "@components/Faq/Faq";
import Services from "@components/Services";
import Cases from "@components/Cases/Cases";
import Reviews from "@components/Reviews/Reviews";
import useLoadingPage from "@shared/hooks/useLoadingPage/useLoadingPage";

const Home = () => {
  const { data, requestId, isLoading } = useGetHomePageQuery();
  useLoadingPage(requestId, isLoading);

  if (!data) {
    return null;
  }

  const { hero, services, cases, reviews, pricing, faq } = data;

  return (
    <>
      <Hero {...hero} />

      <Services id={services.id} headerBlock={services.headerBlock}>
        {services.items.map(({ id, ...props }) => (
          <Services.Item key={id} {...props} />
        ))}
      </Services>

      <Cases {...cases} />
      <Reviews {...reviews} />

      <Pricing
        id={pricing.id}
        headerBlock={pricing.headerBlock}
        titleButton={pricing.titleButton}
        actionButton={pricing.actionButton}
      >
        {pricing.items.map(({ id, ...props }) => (
          <Pricing.Service key={id} {...props} />
        ))}
      </Pricing>

      <Faq id={faq.id} headerBlock={faq.headerBlock}>
        {faq.items.map(({ id, ...props }) => (
          <Faq.Item key={id} {...props} />
        ))}
      </Faq>
    </>
  );
};
export default Home;
