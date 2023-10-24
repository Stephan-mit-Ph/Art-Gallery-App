import GlobalStyle from "../components/styles/globals";
import Layout from "@/src/components/Layout";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
