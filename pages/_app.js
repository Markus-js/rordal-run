import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Footer from '../components/ui/footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
