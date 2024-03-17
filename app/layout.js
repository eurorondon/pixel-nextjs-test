import { FacebookPixel } from "./components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="facebook-domain-verification"
          content="hhnarhtokejdum1dvr2n2lntkac6t2"
        />
      </Head>
      <body>
        {children}
        <FacebookPixel />
      </body>
    </html>
  );
}
