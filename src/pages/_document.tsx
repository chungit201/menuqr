import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const title = 'MenuQR';
  const description = 'Dịch vụ giao đồ ăn nhanh MenuQR';
  return (
    <Html lang="en">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="og:site_name" content={title} />

        <meta name="description" content={description} />
        <meta name="og:description" content={description} />

        <meta name="og:image:alt" content={description} />
        <meta property="og:image" content="https://menuqr.ai/favicon.ico" />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="og:url" content="https://menuqr.ai" />
        <meta name="twitter:card" content="summary" />
        <meta name="og:locale" content="en" />
        <meta property="og:type" content="website" data-react-helmet="true" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
