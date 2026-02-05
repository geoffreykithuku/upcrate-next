import Head from "next/head";
import Image from "next/image";
import { Button } from "../components";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>ERROR 404 | upcrate</title>
        <meta property="og:title" content="ERROR 404" key="title" />
      </Head>
      <div className="relative">
        <div className="z-10 absolute md:bottom-32 max-w-4xl left-0 right-0 text-center mx-auto">
          <h1 className="font-display text-3xl md:text-8xl text-rose">
            Oooops! Wrong way
          </h1>
          <h2 className="font-display text-red md:text-5xl my-10">Error</h2>
          <Button href="/" className="bg-purple text-white">
            Back to the harbour
          </Button>
        </div>
        <div className="z-0 bg-black text-center">
          <Image
            src="/404/background.png"
            width={1920}
            height={1054}
            alt=""
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </>
  );
}
