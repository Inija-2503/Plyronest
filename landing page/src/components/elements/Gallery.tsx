// components/Gallery.tsx
const images = Array.from({ length: 8 }, (_, i) => `../../public/assets/Images/img${i + 1}.jpg`);

export const Gallery = () => {
  return (
    <section className="py-25 px-6 bg-body">
      <h2 className="text-3xl md:text-4xl font-bold text-heading-2 text-center mb-10">
        Our Moments Captured 📸
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Achievements and Success Stories Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-4">
          Achievements and Success Stories
        </h2>
        <p className="text-lg text-gray-600">Coming Soon...</p>
      </section>
    </section>
    
  );
};
