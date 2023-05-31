type Props = {
  imgSrc: string;
  message: string;
  className?: string;
};

export default function IllustrationImageElement({
  imgSrc,
  message,
  className,
}: Props) {
  return (
    <article className={`illustration-container ${className}`}>
      <img
        className="illustration-image"
        src={`${imgSrc}`}
        aria-hidden="true"
      />
      <p className="illustration-message">{message}</p>
    </article>
  );
}
