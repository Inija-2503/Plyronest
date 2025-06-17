// pages/GalleryPage.tsx (or wherever you’re displaying the gallery)

import { Navbar } from "../elements/Navbar"; // adjust path as needed
import { Gallery } from "../elements/Gallery";

const Gallerypage = () => {
  return (
    <>
      <Navbar />  Navbar on top
      <Gallery /> {/* Your gallery section */}
    </>
  );
};

export default Gallerypage;
