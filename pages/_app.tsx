import { ApolloProvider } from "@apollo/client";
import { Layout } from "@components/common";
import { useApollo } from "../lib/apolloClient";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default MyApp;
