import { LoginForm, Container } from "../../Components/";
import { useAuth } from "../../hooks";

export default function Register() {
  const { login } = useAuth();
  return (
    <Container>
      <h1>Login</h1>
      <LoginForm onSubmit={login} />
    </Container>
  );
}
