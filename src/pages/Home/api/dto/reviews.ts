import type { AppImageDTO } from "@shared/entities/appImage/appImage";
import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";

export type ReviewsDTO = {
  id?: string;
  headerBlock: HeaderBlock;
  rating: number;
  ratingText: string;
  reviewsCount: number;
  reviewsText: string;
  avatars: [AppImageDTO, AppImageDTO, AppImageDTO, AppImageDTO, AppImageDTO];
};
