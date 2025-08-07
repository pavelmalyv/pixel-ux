import type { ReviewsDTO } from "../dto/reviews";
import { adaptAppImageDTO, type AppImage } from "@shared/entities/appImage/appImage";

type ReviewsAvatar = {
  id: string;
  appImage: AppImage;
};
type ReviewsAvatars = [ReviewsAvatar, ReviewsAvatar, ReviewsAvatar, ReviewsAvatar, ReviewsAvatar];

export type Reviews = Omit<ReviewsDTO, "avatars"> & {
  id?: string;
  avatars: ReviewsAvatars;
};

export const adaptReviewsDTO = (dto: ReviewsDTO): Reviews => {
  return {
    ...dto,
    avatars: Array.from({ length: 5 }, (_, index) => {
      const avatar: ReviewsAvatar = {
        id: String(index),
        appImage: adaptAppImageDTO(dto.avatars[index]),
      };

      return avatar;
    }) as ReviewsAvatars,
  };
};
