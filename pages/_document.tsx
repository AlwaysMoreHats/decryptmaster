import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased flex justify-center items-center h-screen bg-slate-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
