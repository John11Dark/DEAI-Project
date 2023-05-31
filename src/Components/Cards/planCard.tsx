import Button from "../utils/button";

type PlanCardProps = {
  label: string;
  price: number;
  description: string;
  features: string[];
  className?: string;
  id?: string;
  primary?: boolean;
};

export default function PlanCard(props: PlanCardProps) {
  return (
    <article className={`plan-card | ${props.className}`}>
      <header className="plan-card-header">
        <h3 className="plan-card-label">{props.label}</h3>
        <p className="plan-card-price">{props.price}</p>
        <p className="plan-card-description">{props.description}</p>
      </header>
      <ul className="plan-card-features">
        {props.features.map((feature, index) => (
          <li key={index} className="plan-card-feature">
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className="plan-card-button"
        type="button"
        label="Get Started"
        title="Get Started"
      />
    </article>
  );
}
