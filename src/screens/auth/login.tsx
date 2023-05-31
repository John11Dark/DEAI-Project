import { useEffect } from "react";
import { LoginForm, Container, Main } from "../../Components/";

export default function Login() {
  useEffect(() => {
    document.title = "Login | DEAI";
    document.documentElement.style.overflow = "hidden";
  }, []);
  return (
    <Main className="login-page | flex | single-page">
      <img
        className="login-illustration | auth-illustration | illustration-left"
        src="./login-left.png"
        alt="login illustration"
      />
      <Container className="login-form-container | grid | center | gap-300">
        <article className="section-article | login-article | auth-article">
          <h1 className="section-title | login-title | auth-title">
            Welcome Back!👋
          </h1>
          <p className="section-description | login-description | auth-description">
            Manage your business in a single place with DEAI.
          </p>
        </article>
        <LoginForm />
      </Container>
      <img
        className="login-illustration | auth-illustration | illustration-right"
        src="./login-right.png"
        alt="login illustration"
      />
    </Main>
  );
}
