import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

const App = () => {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <div>
      <div className="max-w-4xl mx-auto space-y-20">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
