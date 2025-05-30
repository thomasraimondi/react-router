import { Outlet } from "react-router-dom";
import Header from "../components/layout/default/Header";
import Footer from "../components/layout/default/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
