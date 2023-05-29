import {
  Container,
  ClickableCard as Card,
  Greetings,
  Button,
  ClickableChart as InfoChart,
  DashboardList as List,
} from "../../Components";
import { useAuth } from "../../hooks";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <Container className="dashboard-content | dashboard-content-dash">
      {/* Top section */}
      <Container className="dashboard-top-section | flex | justify-between">
        <Container className="dashboard-greetings-container">
          <Greetings username={user.name} />
          <Button
            label="See Suggestions"
            primary
            title="See Suggestions"
            type="button"
            className="dashboard-cta-button"
          />
        </Container>

        <Container className="dashboard-info-charts-container | center | flex">
          <InfoChart
            data={[
              { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
              { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
            ]}
            title="New Clients"
            icon="Users"
            labels={156}
            id="dashboard-info-chart-1"
          />
          <InfoChart
            data={[
              { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
              { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
            ]}
            title="Reviews"
            icon="Users"
            labels={4.8}
            id="dashboard-info-chart-1"
          />
          <InfoChart
            data={[
              { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
              { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
            ]}
            title="Reviews"
            icon="Users"
            labels={4.8}
            id="dashboard-info-chart-1"
          />
          <InfoChart
            data={[
              { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
              { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
            ]}
            title="Online Traffic"
            icon="PieChart"
            labels={["Social media", "Search engine"]}
            id="dashboard-info-chart-1"
          />
          <InfoChart
            data={[
              { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
              { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
            ]}
            labels={35}
            title="Bookings"
            icon="Calender"
            id="dashboard-info-chart-1"
          />
        </Container>
      </Container>
      {/* Bottom section */}
      <Container className="dashboard-bottom-section | flex | justify-between">
        <Container className="dashboard-bottom-section-start">
          <Card />
        </Container>
        <Container className="dashboard-bottom-section-center | grid | justify-between">
          <Card />
          <Card />
        </Container>
        <Container className="dashboard-bottom-section-end">
          <Card />
          <List />
        </Container>
      </Container>
    </Container>
  );
}
