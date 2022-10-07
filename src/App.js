import ContentPage from "pages/ContentPage";
import Header from "components/Header";
import { Routes, Route } from "react-router-dom";
import BlogPage from "pages/BlogPage";
import Footer from "components/Footer";
import Tarifler from "pages/Tarifler";
import RecipePage from "pages/RecipePage";
import Ara from "pages/Ara";
import SiteProvider from 'context/SiteContext'
function App() {

  


  return (
    <SiteProvider>
      <>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<ContentPage />} />
            <Route path="/tarifler" element={<Tarifler />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/tarif/:url" element={<RecipePage />} />
            <Route path="/ara/" element={<Ara />} />
          </Routes>
          <Footer />
        </div>
      </>
    </SiteProvider>
  );
}

export default App;
