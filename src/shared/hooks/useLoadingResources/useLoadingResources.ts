import { useAppDispatch, useAppSelector } from "@shared/store/hooks";
import {
  selectIsLoadingRequests,
  updateLoadingResources,
} from "@shared/store/loadingPageSlice/loadingPageSlice";
import { useEffect } from "react";

const useLoadingResources = () => {
  const isLoadingRequests = useAppSelector(selectIsLoadingRequests);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateLoadingResources(true));
  }, [dispatch]);

  useEffect(() => {
    if (isLoadingRequests) {
      return;
    }

    const images = Array.from(
      document.querySelectorAll<HTMLImageElement>("img:not([loading='lazy'])"),
    );

    const handlersImages: {
      img: HTMLImageElement;
      handler: () => void;
    }[] = [];

    const imagesLoad = (async () => {
      const loadPromises = images.map((img) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const handlerLoadFinished = () => resolve(img);

          if (img.complete) {
            handlerLoadFinished();
            return;
          }

          img.addEventListener("load", handlerLoadFinished, { once: true });
          img.addEventListener("error", handlerLoadFinished, { once: true });

          handlersImages.push({
            img,
            handler: handlerLoadFinished,
          });
        });
      });

      await Promise.all(loadPromises);
    })();

    imagesLoad.then(() => {
      dispatch(updateLoadingResources(false));
    });

    return () => {
      handlersImages.forEach(({ img, handler }) => {
        img.removeEventListener("load", handler);
        img.removeEventListener("error", handler);
      });
    };
  }, [isLoadingRequests, dispatch]);
};

export default useLoadingResources;
