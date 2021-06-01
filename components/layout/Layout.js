import classes from "./Layout.module.css";
import Head from "next/head";
import Hero from "./hero/Hero";
import Aside from "./aside/Aside";
import Navigation from "./navigation/navigation";
// Pre-render fonts

export default function Layout(props) {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/Titillium/TitilliumWeb-Black.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Titillium/TitilliumWeb-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Titillium/TitilliumWeb-Light.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Navigation />

      <div className={classes.gridContainer}>
        <section>
          <Hero />
          {/* props are the pageProps from _app*/}
          <main className={classes.main}>{props.children}</main>
        </section>
        <Aside />
      </div>
    </div>
  );
}
