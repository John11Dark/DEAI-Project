export default function CirclesEffect({ className }: { className?: string }) {
  return (
    <section className={`circles-container | ${className}`}>
      <div data-attr="primary" className="cir-effect" />
      <div data-attr="secondary" className="cir-effect" />
    </section>
  );
}
