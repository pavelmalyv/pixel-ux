interface ImageProps {
  src?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  alt?: string;
  className?: string;
}

const Image = ({
  src,
  srcSet,
  sizes,
  width,
  height,
  loading = "lazy",
  alt = "",
  className,
}: ImageProps) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      loading={loading}
      alt={alt}
      className={className}
    />
  );
};
export default Image;
