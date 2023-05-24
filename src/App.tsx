import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
import "./styles/index.css";
import {
  Home,
  About,
  FQA,
  Dashboard,
  APIs,
  Contact,
  Login,
  Register,
  Docs,
} from "./screens";

import { Main, Header } from "./Components";

export default function App() {
  return (
    <>
      <Header
        links={[
          {
            id: 2,
            name: "About",
            path: "/about",
            className: "nav-link",
          },
          {
            id: 3,
            name: "Docs",
            path: "/Docs",
            className: "nav-link",
          },
          {
            id: 4,
            name: "APIs",
            path: "/APIs",
            className: "nav-link",
          },
          {
            id: 5,
            name: "Contact",
            path: "/Contact",
            className: "nav-link",
          },
        ]}
      />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/APIs" element={<APIs />} />
          <Route path="/FQA" element={<FQA />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Main>
    </>
  );
}
