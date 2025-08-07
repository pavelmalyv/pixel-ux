import { LayoutContextProvider } from "@pages/Layout/context/LayoutContext";
import { useGetLayoutPageQuery } from "@pages/Layout/api/layoutApi";

import Header from "@modules/Header";
import Footer from "@components/Footer/Footer";
import useLoadingPage from "@shared/hooks/useLoadingPage/useLoadingPage";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { data, isLoading, requestId } = useGetLayoutPageQuery();
  useLoadingPage(requestId, isLoading);

  return (
    <LayoutContextProvider value={data?.siteSettings ?? {}}>
      {data && <Header {...data.header} />}

      <main>{children}</main>

      {data && <Footer {...data.footer} />}
    </LayoutContextProvider>
  );
};
export default Layout;
