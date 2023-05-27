import {
  Container,
  DashboardSideBar as SideBar,
  DashboardHeader as Header,
  ClickableCard as Card,
  Greetings,
  Button,
  ClickableChart as InfoChart,
  DashboardList as List,
} from "../../Components";

export default function Dashboard() {
  const user = {
    name: "John",
    surname: "Muller",
    email: "info@johnmuller.eu",
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <Container className="dashboard-container">
      <Header />
      <SideBar className="flex" />
      {/* Main section */}
      <Container className="dashboard-content">
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

          <Container className="dashboard-info-charts-container | justify-between | flex">
            <InfoChart
              id="chart1"
              title="online traffic"
              data={{
                value: 100,
                text: "Total Sales",
                labels: ["online traffic"],
              }}
              icon="https://i.pravatar.cc/150?img=3"
              type="pie"
            />
            <InfoChart
              id="chart1"
              title="Bookings"
              data={{
                value: 100,
                text: "Total Sales",
                labels: ["Bookings"],
              }}
              icon="https://i.pravatar.cc/150?img=3"
              type="pie"
            />
            <InfoChart
              id="chart1"
              title="Total Sales"
              data={{
                value: 100,
                text: "Total Sales",
                labels: ["Total Sales"],
              }}
              icon="https://i.pravatar.cc/150?img=3"
              type="pie"
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
    </Container>
  );
}
