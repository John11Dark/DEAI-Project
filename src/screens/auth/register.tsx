import { RegisterForm, Container } from "../../Components/";
import { useAuth } from "../../hooks";

export default function Register() {
  const { register } = useAuth();
  return (
    <Container>
      <h1>Register</h1>
      <RegisterForm onSubmit={register} />
    </Container>
  );
}
