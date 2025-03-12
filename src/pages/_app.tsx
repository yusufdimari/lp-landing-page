import { AppProps } from 'next/app';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <head>
      {/* <!-- Character Encoding --> */}
      <meta charSet="UTF-8" />

      {/* <!-- Viewport Settings for Responsiveness --> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* <!-- Page Title --> */}
      <title>
        Leadership Perspective Limited | Empowering Leaders, Transforming
        Organizations
      </title>

      {/* <!-- Meta Description (SEO Optimization) --> */}
      <meta
        name="description"
        content="Leadership Perspective Limited (LPL) offers world-class executive training, oil & gas consultancy, and leadership development programs to help professionals and organizations achieve success."
      />

      {/* <!-- Keywords (SEO) --> */}
      <meta
        name="keywords"
        content="Leadership training, Executive coaching, Oil and Gas consultancy, Corporate governance, Business strategy, Professional development"
      />

      {/* <!-- Open Graph (Facebook & LinkedIn Preview) --> */}
      <meta
        property="og:title"
        content="Leadership Perspective Limited | Empowering Leaders"
      />
      <meta
        property="og:description"
        content="LPL provides leadership training, corporate consulting, and executive coaching to help professionals thrive."
      />
      <meta
        property="og:image"
        content="https://leadershipperspectiveltd.com/logo.jpg"
      />
      <meta property="og:url" content="https://leadershipperspectiveltd.com" />
      <meta property="og:type" content="website" />

      {/* <!-- Twitter Card (X Preview) --> */}
      <meta name="twitter:card" content="summary_large_image/logo.jpg" />
      <meta
        name="twitter:title"
        content="Leadership Perspective Limited | Empowering Leaders"
      />
      <meta
        name="twitter:description"
        content="LPL provides executive leadership training and corporate strategy consulting."
      />
      <meta
        name="twitter:image"
        content="https://leadershipperspectiveltd.com/logo.jpg.jpg"
      />

      {/* <!-- Favicon --> */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      {/* <!-- Google Fonts --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
        rel="stylesheet"
      />

      {/* <!-- Stylesheet (Tailwind or Custom CSS) --> */}
      <link rel="stylesheet" href="/styles/global.css" />

      {/* <!-- Preload Important Assets (Performance Optimization) --> */}
      <link rel="preload" href="/assets/hero-image.jpg" as="image" />

      {/* <!-- Canonical URL (SEO) --> */}
      <link rel="canonical" href="https://leadershipperspectiveltd.com" />

      {/* <!-- Robots Meta Tag (Allow Search Engines to Index) --> */}
      <meta name="robots" content="index, follow" />
    </head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
