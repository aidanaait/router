import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Events from "./components/events";
import Products from "./components/products";
import Contacts from "./components/contacts";
import NavBar from "./components/navBAr";
import NotFound from "./components/notFound";
import History from "./components/history";
import Services from './components/services'
import Locations from './components/locations'

const AppNew = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />}>
          <Route path="/about/history" exact element={<History />} />
          <Route path="/about/services" element={<Services />} />
          <Route path="/about/locations" element={<Locations />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" exact element={<About />}>
          <Route path="history" exact element={<History />} />
          <Route path="services" element={<Services />} />
          <Route path="locations" element={<Locations />} />
        </Route>
        <Route path="events" element={<Events />} />
        <Route path="products" element={<Products />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="contacts/:name" element={<Contacts />} />
        <Route path="contacts/:name/:email" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
        <Route
        path="services"
        element={<Navigate to="/about/services"/>}
        />
      </Routes>
    </div>
  );
};

export default AppNew;
