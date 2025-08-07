const TYPES = {
  webp: "image/webp",
} as const;

type Media = "md";

type ImageSingleSource = [
  {
    id?: string;
    srcSet?: string;
    type?: "webp";
    media?: Media;
    width?: number;
    height?: number;
  },
];

type ImageMultipleSources = {
  id: string;
  srcSet?: string;
  type?: "webp";
  media?: Media;
  width?: number;
  height?: number;
}[];

interface ImageProps {
  classNameImg?: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  isLazy?: boolean;
  sources?: ImageSingleSource | ImageMultipleSources;
}

const Image = ({
  src,
  width,
  height,
  sources,
  alt = "",
  isLazy = true,
  classNameImg,
}: ImageProps) => {
  const mediaResponsive = {
    md: "(max-width: 767px)",
  } as const;

  return (
    <picture>
      {sources?.map(({ id, srcSet, type, media, width, height }) => (
        <source
          key={id ?? 0}
          srcSet={srcSet}
          type={type && TYPES[type]}
          media={media && mediaResponsive[media]}
          width={width}
          height={height}
        />
      ))}
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={isLazy ? "lazy" : "eager"}
        className={classNameImg}
      />
    </picture>
  );
};
export default Image;
