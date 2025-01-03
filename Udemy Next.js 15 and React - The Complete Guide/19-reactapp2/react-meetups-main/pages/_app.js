import GlobalStyle from "@/styles/GlobalStyle";
import Layout from "@/layout/Layout";

//# 루트, 최상위 컴포넌트
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
