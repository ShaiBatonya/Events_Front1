import { Outlet } from "react-router-dom";
import Nav from "./../components/sections/Nav";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../components/sections/Footer";
function Root() {

  const { user } = useAuth();

  return (
    <>
      <Nav user={user} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
