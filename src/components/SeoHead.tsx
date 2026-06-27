import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  PAGE_SEO,
  PageKey,
  SITE_NAME,
  KEYWORDS_META,
  DEFAULT_OG_IMAGE,
  GOOGLE_SITE_VERIFICATION,
  canonicalUrl,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { normalizePathname } from "@/lib/navigation";

interface SeoHeadProps {
  page: PageKey;
  titleOverride?: string;
  descriptionOverride?: string;
  pathOverride?: string;
  keywordsOverride?: string;
  ogType?: "website" | "product" | "article";
  /** Include WebSite schema (home & products catalogue) */
  includeWebsiteSchema?: boolean;
  extraJsonLd?: object[];
}

const SeoHead = ({
  page,
  titleOverride,
  descriptionOverride,
  pathOverride,
  keywordsOverride,
  ogType = "website",
  includeWebsiteSchema = false,
  extraJsonLd = [],
}: SeoHeadProps) => {
  const location = useLocation();
  const seo = PAGE_SEO[page];
  const title = titleOverride ? `${titleOverride} | ${SITE_NAME}` : seo.title;
  const description = descriptionOverride ?? seo.description;
  const normalizedPath = normalizePathname(location.pathname);
  const canonicalPath =
    pathOverride ?? (normalizedPath === "/" ? "/egg-incubators" : normalizedPath);
  const canonical = canonicalUrl(canonicalPath);
  const robots = seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  const keywords = keywordsOverride ?? seo.keywords ?? KEYWORDS_META;

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Lakhandur, Bhandara, Vidarbha, Maharashtra, India" />
      <meta name="theme-color" content="#3d8b6e" />
      <meta name="format-detection" content="telephone=yes" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en-IN" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {GOOGLE_SITE_VERIFICATION ? (
        <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
      ) : null}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:secure_url" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:alt" content={`${SITE_NAME} — egg incubator manufacturer Maharashtra & India`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — automatic egg incubator & egg hatching machine`} />

      <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      {includeWebsiteSchema ? (
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      ) : null}
      {extraJsonLd.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SeoHead;
