export type AppImageDTO = {
  src?: string;
  srcSet?: string;
  width?: number;
  height?: number;
  alt?: string;
  isLazy?: boolean;
};

export type AppImage = {
  src?: string;
  srcSet?: string;
  width?: number;
  height?: number;
  alt?: string;
  loading?: "lazy" | "eager";
};

export const adaptAppImageDTO = (dto: AppImageDTO): AppImage => {
  return {
    ...dto,
    loading: dto.isLazy ? "lazy" : "eager",
  };
};
