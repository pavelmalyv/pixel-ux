export type AppImageDTO = {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  isLazy?: boolean;
  sources?: {
    srcSet?: string;
    type?: "webp";
    media?: "md";
    width?: number;
    height?: number;
  }[];
};

export type AppImage = {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  isLazy?: boolean;
  sources?: {
    id: string;
    srcSet?: string;
    type?: "webp";
    media?: "md";
    width?: number;
    height?: number;
  }[];
};

export const adaptAppImageDTO = (dto: AppImageDTO): AppImage => {
  return {
    ...dto,
    sources: dto.sources?.map((source, index) => ({
      id: String(index),
      ...source,
    })),
  };
};
