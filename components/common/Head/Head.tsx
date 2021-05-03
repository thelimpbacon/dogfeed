import NextHead from "next/head";

const Head = () => {
  return (
    <>
      <NextHead>
        <title>Dog Feed</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/mount-then-bike-bohol/image/upload/v1618568978/portfolio/1_chygvi.jpg"
        />
        <meta
          name="description"
          content="Mock social media site using data from https://dummyapi.io/"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </NextHead>
    </>
  );
};

export default Head;
