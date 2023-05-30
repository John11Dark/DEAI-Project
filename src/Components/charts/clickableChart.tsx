import Icon from "../utils/icon";

type ChartsPropType = {
  id: string;
  title: string;
  icon: string;
  color?: string;
  data: any;
  labels: string[] | number;
};

function setLabels(labels: string[]) {
  return labels.map((label, index) => {
    return (
      <span key={index} className="activity-labels-label">
        {label}
      </span>
    );
  });
}

function setLabel(label: number) {
  if (label > 99) return "99+";
  else return label;
}
export default function ClickableChart({
  id,
  title,
  icon,
  labels,
  data,
}: ChartsPropType) {
  return (
    <div className="chart-container" id={id} title="Click to see more details">
      <div className="flex | justify-between | info-chart-top">
        <p className="info-chart-title">{title}</p>
        <Icon name={icon} className="info-chart-icon" />
      </div>
      <div>
        <Icon name="Statics" className="info-chart-icon-center" />
      </div>

      <div className="info-chart-bottom | flex | relative | center | justify-between">
        <p
          className={
            typeof labels === "number" ? "activity-label" : "activity-labels"
          }
        >
          {typeof labels === "number" ? setLabel(labels) : setLabels(labels)}
        </p>
        <div className="grid | since-time-activity">
          <div className="something">
            <p className="flex | center">
              <Icon
                name="TrendUp"
                className="info-chart-icon-arrow"
                size={20}
              />
              <span className="since-value">5%</span>
            </p>
            <p className="since-value-time">Since last month</p>
          </div>
          <svg viewBox="0 0 149 32" className="trend-line-info-chart">
            <path
              d="M493.044,326.2l-.468-.7,15.367-10.244,10.538,5.058,15.157-9.684.2.087,29.946,12.775L587.8,311.7l23.316,9.452,29.3-25.948.559.631-29.688,26.293-23.45-9.507-24.019,11.8-30.1-12.839-15.177,9.7-10.525-5.051Z"
              transform="translate(-491.744 -294.45)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
