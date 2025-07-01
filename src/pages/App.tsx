import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Header from "../components/Header";
import Oracle from "./Oracle";
import Connect from "./Connect";
import Developers from "./developers";
import RequestDemo from "./request-demo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Oracle />} />
        <Route path="/crymbo-connect" element={<Connect />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="*" element={<Oracle />} />
      </Route>
    </Routes>
  );
}

export default App;
