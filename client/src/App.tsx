import "./App.css";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";

import PublicRouter from "./routes/PublicRoutes";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <PublicRouter />
        <Footer />
      </>
    </div>
  );
}

export default App;
