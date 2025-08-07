import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

import Preloader from "@components/Preloader/Preloader";
import Home from "@pages/Home";
import Layout from "@pages/Layout";
import gsap from "gsap";
import useLoadingResources from "@shared/hooks/useLoadingResources/useLoadingResources";

const App = () => {
  useLoadingResources();
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis
        root
        options={{ autoRaf: false, lerp: 0.06, anchors: { offset: -50 } }}
        ref={lenisRef}
      />
      <Preloader>
        <Layout>
          <Home />
        </Layout>
      </Preloader>
    </>
  );
};

export default App;
