import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Event from "../pages/Event";
import CareerPage from "../pages/CareerPage";
import Policy from "../pages/Policy";
import Blogs from '../pages/Blogs';
import Blogpage from '../components/layouts/Blog/Blogpage';

function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/events" element={<Event />} />
        {/* <Route path="/academics/:universityId" element={<Resources />} /> */}
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blogpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default PublicRoutes;
