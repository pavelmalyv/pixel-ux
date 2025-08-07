import { useAppDispatch } from "@shared/store/hooks";
import { updateLoadingRequest } from "@shared/store/loadingPageSlice/loadingPageSlice";
import { useEffect } from "react";

const useLoadingPage = (id: string | undefined, isLoading: boolean) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(updateLoadingRequest([id, isLoading]));
  }, [id, isLoading, dispatch]);
};
export default useLoadingPage;
