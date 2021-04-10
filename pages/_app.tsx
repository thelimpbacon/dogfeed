import { ApolloProvider } from "@apollo/client";
import { Head, Layout } from "@components/common";
import { useApollo } from "../lib/apolloClient";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);
  return (
    <>
      <Head />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
