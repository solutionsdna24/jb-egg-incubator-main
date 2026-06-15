interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  heightClass?: string;
  priority?: boolean;
}

/** Background-image product photo — survives Google Translate DOM rewrites */
const ProductImage = ({
  src,
  alt,
  className = "",
  heightClass = "h-52 sm:h-56",
  priority = false,
}: ProductImageProps) => (
  <div
    className={`product-image-wrap notranslate ${heightClass} w-full bg-stone-100 ${className}`}
    translate="no"
    role="img"
    aria-label={alt}
    data-protected-src={src}
    data-product-image={src}
    style={{
      backgroundImage: `url("${src}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    {...(priority ? { "data-fetchpriority": "high" } : {})}
  />
);

export default ProductImage;
