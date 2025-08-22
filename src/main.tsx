import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeConfig } from "flowbite-react";
import { Provider } from "react-redux";
import { store } from "@shared/store/store.ts";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

import App from "./App.tsx";
import gsap from "gsap";

import "./assets/styles/index.css";

import "@fontsource/inter/400";
import "@fontsource/inter/600";
import "@fontsource/inter/700";

import "@fontsource/raleway/400";
import "@fontsource/raleway/700";

import "swiper/css";

async function enableMocking() {
  const { worker } = await import("@shared/mocks/browser");
  return worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
  });
}

const root = createRoot(document.getElementById("root")!);
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, Observer);

enableMocking().then(() => {
  root.render(
    <StrictMode>
      <Provider store={store}>
        <ThemeConfig dark={false} />
        <App />
      </Provider>
    </StrictMode>,
  );
});
