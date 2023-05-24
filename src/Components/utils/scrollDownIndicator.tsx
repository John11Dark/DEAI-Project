export default function ScrollDownIndicator({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      onClick={() => {
        scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
      className={`scroll-down-indicator | ${className}`}
    >
      <div className="scroll-down-indicator-ball" />
    </div>
  );
}
