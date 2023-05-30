import { useEffect } from "react";
import { Container, Main } from "../../Components/";
import SignUpForm from "../../Components/forms/customForms/signup";

export default function Register() {
  useEffect(() => {
    document.title = "Register | DEAI";
    document.documentElement.style.overflow = "hidden";
  }, []);
  return (
    <Main className="register-page | flex | center">
      <img
        className="register-illustration | auth-illustration | illustration-left"
        src="/reg-left.png"
        alt="register illustration"
      />
      <Container className="register-form-container | grid | center | gap-300">
        <article className="section-article | register-article | auth-article">
          <h1 className="section-title | register-title | auth-title">
            Simplify Your Business Management👌
          </h1>
          <p className="section-description | register-description | auth-description">
            Join us and experience the power of DEAI effortlessly solutions!.
          </p>
        </article>
        <SignUpForm />
      </Container>
      <img
        className="register-illustration | auth-illustration | illustration-right"
        src="reg-right.png"
        alt="register illustration"
      />
    </Main>
  );
}
