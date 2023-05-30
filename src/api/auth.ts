import settings from "../Config/settings";
import client from "./client";
import jwtDecode from "jwt-decode";
interface LoginProps {
  email: string;
  password: string;
}

async function login({ email, password }: LoginProps): Promise<any> {
  const response = await fetch(`${settings.apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
}

interface UserInfoProps {
  type: string;
  name: string;
  username: string;
  role: string;
  email: string;
  password: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  image: string[];
  countryCode: string;
}

function register(userInfo: UserInfoProps): Promise<any> {
  const {
    name,
    username,
    role = "user",
    email,
    password,
    phoneNumber,
    dateOfBirth,
    countryCode,
    address,
    gender,
    image,
  } = userInfo;

  const userObject = new FormData();
  userObject.append("name", name);
  userObject.append("username", username);
  userObject.append("role", role);
  userObject.append("email", email);
  userObject.append("password", password);
  userObject.append("phoneNumber", phoneNumber);
  userObject.append("dateOfBirth", dateOfBirth);
  userObject.append("countryCode", countryCode);
  userObject.append("address", address);
  userObject.append("gender", gender);

  if (image) {
    for (const img of image) {
      userObject.append("image", img);
    }
  }

  return client.post("/users", userObject);
}
interface ResetPasswordProps {
  email: string;
  phoneNumber?: string;
}

type userType = {
  type: string;
  name: string;
  username: string;
  role: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  address?: string;
  image: string[];
  countryCode: string;
};

function resetPassword({
  email,
  phoneNumber,
}: ResetPasswordProps): Promise<any> {
  const requestData = phoneNumber ? { phoneNumber } : { email };
  return client.post("/auth/reset-password", requestData);
}

function verifyResetPasswordToken(token: string): Promise<any> {
  return client.post("/auth/verify-reset-password-token", { token });
}

function changePassword(token: string, password: string): Promise<any> {
  return client.post("/auth/change-password", { token, password });
}

function verifyEmail(token: string): Promise<any> {
  return client.post("/auth/verify-email", { token });
}

function resendVerificationEmail(email: string): Promise<any> {
  return client.post("/auth/resend-verification-email", { email });
}

function verifyPhoneNumber(token: string): Promise<any> {
  return client.post("/auth/verify-phone-number", { token });
}

function resendVerificationPhoneNumber(phoneNumber: string): Promise<any> {
  return client.post("/auth/resend-verification-phone-number", { phoneNumber });
}

function decode(token: string): userType | undefined {
  try {
    const user: userType = jwtDecode(token);
    return user;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function setToken(token: string) {
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("token", token);
}

function getUser(): userType | undefined {
  const token = localStorage.getItem("token");
  const user: userType | undefined = decode(token!);
  return user;
}

function removeToken() {
  delete client.defaults.headers.common["Authorization"];
  localStorage.removeItem("token");
}

function logout() {
  removeToken();
}
export default {
  logout,
  decode,
  setToken,
  getUser,
  removeToken,
  login,
  register,
  resetPassword,
  verifyResetPasswordToken,
  changePassword,
  verifyEmail,
  resendVerificationEmail,
  verifyPhoneNumber,
  resendVerificationPhoneNumber,
};
