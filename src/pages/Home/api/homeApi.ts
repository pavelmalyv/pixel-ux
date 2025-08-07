import type { HomePageDTO } from "./dto/homePage";
import { adaptHomePageDTO, type HomePage } from "./mappers";
import { api } from "@shared/store/api";

const homeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHomePage: build.query<HomePage, void>({
      query: () => "pages/home",
      transformResponse: (response: HomePageDTO) => {
        return adaptHomePageDTO(response);
      },
    }),
  }),
});

export const { useGetHomePageQuery } = homeApi;
