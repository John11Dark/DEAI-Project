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
