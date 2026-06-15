import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import redIncubator from "@/assets/red-incubator-original.webp";
import woodIncubator from "@/assets/wood-incubator-original.webp";
import interiorIncubator from "@/assets/interior-incubator.webp";
import compactIncubator from "@/assets/compact-incubator-original.webp";
import jbLogo from "@/assets/jb-logo.webp";
import eggsTray from "@/assets/eggs-tray.webp";
import parcelBox from "@/assets/parcel-box.webp";
import chickHatched from "@/assets/chicks-hatched.webp";

const GallerySection = () => {
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

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = (220 + 24) * 3;

  const scrollBy = (amount: number) => {
    scrollRef.current?.scrollTo({ left: scrollRef.current.scrollLeft + amount, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-10 sm:py-12 px-4 bg-slate-50">
      <div className="container mx-auto relative">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">Our Gallery</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our JB incubator setups and success stories
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-slate-50 hidden sm:block"
            onClick={() => scrollBy(-scrollAmount)}
            aria-label="Scroll gallery left"
          >
            <ChevronLeft className="h-5 w-5 text-slate-600" />
          </button>

          <div ref={scrollRef} className="overflow-x-auto pb-4 scrollbar-hide scroll-smooth -mx-1 px-1">
            <div className="flex gap-4 sm:gap-6 min-w-max">
              {galleryItems.map((item, index) => (
                <article
                  key={item.title}
                  className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col items-center w-[200px] sm:w-[220px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-36 sm:h-48 object-cover"
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    width={220}
                    height={192}
                  />
                  <div className="p-3 sm:p-4 w-full text-center">
                    <h3 className="font-medium text-slate-700 text-sm sm:text-base">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-slate-50 hidden sm:block"
            onClick={() => scrollBy(scrollAmount)}
            aria-label="Scroll gallery right"
          >
            <ChevronRight className="h-5 w-5 text-slate-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
