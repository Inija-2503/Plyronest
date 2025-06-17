import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Layout } from "./components/Layout";
// import { AboutUs } from "./components/sections/AboutUs";
// import { CTA } from "./components/sections/CallToAction";
// import { Collabration } from "./components/sections/Collabration";
// import { Hero } from "./components/sections/Hero";
// import { Internship } from "./components/sections/Internship";
// import { Services } from "./components/sections/Services";
import Gallerypage from "./components/sections/Gallerypage"; // ✅ Import gallery
import { Homepage } from "./components/pages/Homepage";
import InternPage from "./components/pages/InternPage";
import ConnectPage from "./components/pages/ConnectPage"

// function Home() {
//   return (
//     <>
//       <Hero />
//       <Collabration />
//       <AboutUs />
//       <Services />
//       <Internship />
//       <CTA />
//     </>
//   );
// }

function App() {
  return (
    <Router>
      {/* <Layout title="PLYRoNeST"> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallerypage />} /> {/* ✅ Add this route */}
          <Route path="/internship" element={<InternPage />} />
          <Route path="/connect" element={<ConnectPage />} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
