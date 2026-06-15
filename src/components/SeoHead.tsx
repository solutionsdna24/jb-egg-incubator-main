import { Helmet } from "react-helmet-async";
import {
  PAGE_SEO,
  PageKey,
  SITE_NAME,
  KEYWORDS_META,
  DEFAULT_OG_IMAGE,
  canonicalUrl,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

interface SeoHeadProps {
  page: PageKey;
  titleOverride?: string;
  descriptionOverride?: string;
  pathOverride?: string;
  extraJsonLd?: object[];
}

const SeoHead = ({
  page,
  titleOverride,
  descriptionOverride,
  pathOverride,
  extraJsonLd = [],
}: SeoHeadProps) => {
  const seo = PAGE_SEO[page];
  const title = titleOverride ? `${titleOverride} | ${SITE_NAME}` : seo.title;
  const description = descriptionOverride ?? seo.description;
  const canonical = canonicalUrl(pathOverride ?? seo.path);
  const robots = seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  const keywords = seo.keywords ?? KEYWORDS_META;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Lakhandur, Bhandara, Vidarbha, Maharashtra, India" />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      {extraJsonLd.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SeoHead;
