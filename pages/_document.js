import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
              <center><a href="https://matchmycutegirlfriend.me" target="_blank"><img class="alignright size-full wp-image-109" title="" src="https://www.buylandingpagedesign.com/portfolio/designs/full/custom-website-static-banner-design-service-018.jpg" alt="" height="150" width="728" /></a></center>
        </Head>
              <center><a href="https://matchmycutegirlfriend.me" target="_blank"><img class="alignright size-full wp-image-109" title="" src="https://www.buylandingpagedesign.com/portfolio/designs/full/custom-website-static-banner-design-service-018.jpg" alt="" height="150" width="728" /></a></center>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
