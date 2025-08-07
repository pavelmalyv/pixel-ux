import type { LayoutDTO } from "./layoutDto";
import { adaptLayoutPageDTO, type LayoutPage } from "./layoutMapper";
import { api } from "@shared/store/api";

const homeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLayoutPage: build.query<LayoutPage, void>({
      query: () => "pages/layout",
      transformResponse: (response: LayoutDTO) => {
        return adaptLayoutPageDTO(response);
      },
    }),
  }),
});

export const { useGetLayoutPageQuery } = homeApi;
