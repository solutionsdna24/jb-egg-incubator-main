import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import redIncubator from "@/assets/red-incubator-original.png";
import woodIncubator from "@/assets/wood-incubator-original.png";
import interiorIncubator from "@/assets/interior-incubator.png";
import compactIncubator from "@/assets/compact-incubator-original.png";
import jbLogo from "@/assets/jb-logo.png";
import eggsTray from "@/assets/eggs-tray.jpg";
import parcelBox from "@/assets/parcel-box.jpg";
import chickHatched from "@/assets/chicks-hatched.jpg";




const GallerySection = ({ onOrderNowClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryItems = [
    { image: jbLogo, title: "JB Egg Incubator Brand" },
    { image: redIncubator, title: "Professional Incubator" },
    { image: woodIncubator, title: "Premium Wood Design" },
    { image: interiorIncubator, title: "Advanced Interior Setup" },
    { image: compactIncubator, title: "Compact Design" },
    { image: eggsTray, title: "Eggs in Tray" },
    { image: parcelBox, title: "Parcel Ready for Delivery" },
    { image: chickHatched, title: "Chicks Hatched in Incubator" },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, galleryItems.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 3; // slow scroll
        // Loop back to start if at end
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 1;
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollBy = (amount) => {
    if (scrollRef.current) {
      const newScrollLeft = scrollRef.current.scrollLeft + amount;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const imageWidth = 220 + 24; // min-w-[220px] + gap-6 (24px)
  const scrollAmount = imageWidth * 5;

  return (
    <section className="pt-4 pb-0 px-4 bg-gray-50 mb-0">
      <div className="container mx-auto relative">
        {/* Buttons before gallery */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <p className="text-gray-600" style={{ fontFamily: 'Microsoft YaHei UI Light, Microsoft YaHei, Arial, sans-serif' }}>
            Explore our JB incubator setups and success stories
          </p>
        </div>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
            onClick={() => scrollBy(-scrollAmount)}
            aria-label="Scroll Left"
            style={{ left: '-24px' }}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-4 scrollbar-hide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex gap-6 min-w-max">
              {galleryItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center min-w-[220px] max-w-xs">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 sm:h-56 object-cover rounded-t-lg"
                  />
                  <div className="p-4 w-full text-center">
                    <h3 className="font-semibold text-gray-600 text-base">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
            onClick={() => scrollBy(scrollAmount)}
            aria-label="Scroll Right"
            style={{ right: '-24px' }}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;