import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Keyword,
  PlanCard,
  CirclesEffect,
  ScrollDownIndicator,
  ContactForm,
  Main,
} from "../../Components";
import UnderlineKeyword from "../../Components/content/underlineKeyword";

export default function Home() {
  return (
    <Main className="main-content" id="main-content">
      <Container className="body-container | flex | hero-section">
        <ScrollDownIndicator />
        <CirclesEffect className="hero-circles-effect" />

        <article className="hero-article">
          <h1 className="title | hero-title">
            <Keyword text="Revolutionize " /> Your Customer Service with{" "}
            <Keyword text="AI-powered " /> Chatbot{" "}
            <UnderlineKeyword text="solutions" className="" />
          </h1>
          <p className="paragraph | hero-paragraph">
            Automate your customer support with AI and elevate your business.
          </p>
          <Button
            label="Get Started"
            title="Get Started"
            path="/register"
            type="button"
            primary
            onClick={() => () => {
              console.log("object");
            }}
            className="outline-button"
          />
        </article>

        <img
          className="image | hero-image"
          src="/hero-section.png"
          alt="hero section image"
        />
      </Container>

      <Container className="body-container | flex">
        <article className="section-article">
          <h1 className="title | section-title">Who We Are ? </h1>
          <p className="paragraph | section-paragraph">
            Dark Engines Artificial Intelligence (DEAI) is a state-of-the-art
            platform that leverages the latest advancements in machine learning
            and natural language processing to provide businesses and
            individuals with powerful, all-in-one tools for analyzing customer
            feedback, managing social media, and optimizing business operations.
            With DEAI, you can seamlessly collect customer feedback from
            multiple sources, including social media, emails, and surveys, and
            our advanced sentiment analysis algorithms accurately identify the
            mood and tone of customer messages. This enables you to quickly spot
            trends, identify pain points, and make informed decisions about your
            business. In addition, DEAI allows you to manage your social media
            apps, bookings, posts, advertisements, customer queries, business
            hours, online traffic, and more in one centralized location. Our
            platform is designed to help you streamline your operations, enhance
            customer satisfaction, and drive revenue growth. Whether you're a
            small business owner or a large enterprise, DEAI provides the
            insights and tools you need to revolutionize your customer service
            and take your business to the next level.
          </p>
        </article>
        <img className="section-image" src="/whoWeAre.png" alt="image" />
      </Container>

      <Container className="body-container">
        <h1 className="title | section-title">OUR SERVICES </h1>
        <p className="paragraph | section-paragraph">
          At Dark Engines AI, we are committed to delivering high-quality,
          reliable, and scalable AI solutions that help our clients achieve
          their goals. Whether you are a small business owner looking to improve
          customer satisfaction or a large enterprise seeking to gain a
          competitive edge, we have the expertise and resources to meet your
          needs. Explore our platform today and discover how Dark Engines AI can
          help you harness the power of AI to drive business success!
        </p>
      </Container>

      <Container className="body-container | center | grid">
        <h1 className="title | section-title">OUR SERVICES </h1>
        <p className="paragraph | section-paragraph">
          Once a customer subscribes to our platform, they gain access to a wide
          range of social media applications, which they can connect to their
          account via a secure API integration process. We take the privacy and
          security of our users very seriously, and provide transparent
          explanations of how the app accesses and utilizes their account
          information in our{" "}
          <Link target="blank" to="/PAP" className="inline-link | primary">
            {" "}
            Privacy Policy .{" "}
          </Link>
          Once the integration is complete, users can easily manage their social
          media pages, monitor traffic, and respond to messages using our
          intuitive platform. Our state-of-the-art integration with ChatGPT 4
          allows for well-written, engaging posts that are sure to capture the
          attention of their target audience. In addition to managing social
          media, our app offers a range of other powerful features, such as the
          ability to schedule posts, events, and bookings. Users can also
          advertise their business, integrate with their website, assign tasks
          to team members, and more. With our all-in-one platform, managing and
          growing a successful online presence has never been easier.
        </p>
      </Container>

      <Container className="body-container | flex">
        <article className="article | section-article">
          <h1 className="title | section-title">
            Why choosing <Keyword text="DEAI" />{" "}
          </h1>
          <p className="paragraph | section-paragraph">
            At Dark Engines AI, we provide you with the tools to take your
            business to the next level. Our platform allows you to automate
            daily tasks and save valuable time. With AI-powered content
            generation, you can create high-quality, on-brand posts with
            targeted hashtags that maximize your social media reach. Our
            customized model is tailored to your business needs and helps you
            effortlessly create compelling social media posts, handle customer
            queries and bookings,and even provides suggestions and ideas for
            growth. Choose DEAI for the ultimate AI-powered solution to take
            your business to new heights.
          </p>
        </article>
      </Container>

      <Container className="body-container | grid | center">
        <h1 className="title | section-title">What they say</h1>
      </Container>

      <Container className="body-container | plans-section | grid">
        <article className="flex">
          <article className="section-article">
            <h1 className="title | section-title">Plans</h1>
            <p className="paragraph | section-paragraph">
              At DEAI, we understand the unique needs of your business, whether
              you're a developer or an individual. Our cost-effective plans
              offer high security and 24/7 access to our full range of services
              and support, so you can focus on what matters most - growing your
              business.
            </p>
          </article>
          <img src="/plans.png" alt="" />
        </article>
        {/* <Container className="plans-container | flex">
          <PlanCard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            label="plan 1"
            price={455}
            features={["feature 1", "feature 2", "feature 3"]}
          />
          <PlanCard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            label="plan 1"
            price={455}
            features={["feature 1", "feature 2", "feature 3"]}
            primary
          />
          <PlanCard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            label="plan 1"
            price={455}
            features={["feature 1", "feature 2", "feature 3"]}
          />
        </Container> */}
      </Container>

      <Container className="body-container | flex">
        <article className="section-article">
          <h1 className="title | section-title">
            Connect with Our Product Analytics Experts
          </h1>
          <p className="paragraph | section-paragraph">
            We're committed to helping you get the most out of our product and
            making your experience as smooth and productive as possible.
          </p>
          <img src="/contact.png" alt="" />
        </article>
        <ContactForm />
      </Container>
    </Main>
  );
}
