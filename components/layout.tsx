import React from "react";
import Head from "next/head";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Upcrate.art</title>
        <meta name="description" content="Unbox your creativity" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="google-site-verification"
          content="2EeboCOoxIj0bB_9UPHG5M9fYqaXnHP9LF0nBDRDodU"
        />
      </Head>

      <Header />
      <main className="mx-autow">{children}</main>
      <Footer />
    </div>
  );
}
