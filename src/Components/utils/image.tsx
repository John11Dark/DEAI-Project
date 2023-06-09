type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  width?: number;
  height?: number;
  srcSet?: string;
};

export default function Image({
  src,
  alt,
  className,
  lazy,
  width = 100,
  height = 100,
  srcSet,
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? "lazy" : "eager"}
      aria-hidden={alt ? "false" : "true"}
      unselectable="on"
      title={alt}
      width={width}
      height={height}
      srcSet={srcSet}
    />
  );
}
