import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/website/HomePage";
import AboutPage from "./pages/website/AboutPage";
import ItemsPage from "./pages/website/ItemsPage";
import ValuesPage from "./pages/website/ValuesPage";
import CertificationsPage from "./pages/website/CertificationsPage";
import ContactPage from "./pages/website/ContactPage";
import { useFetchWebContentDataQuery } from "./redux/firebaseSlice";
import Loader from "./components/Loader";

function App() {
  const isWebContentLoading: boolean = useFetchWebContentDataQuery().isLoading;

  return isWebContentLoading ? (
    <Loader />
  ) : (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/piezas" element={<ItemsPage />} />
        <Route path="/certificaciones" element={<CertificationsPage />} />
        <Route path="/mision-y-valores" element={<ValuesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
