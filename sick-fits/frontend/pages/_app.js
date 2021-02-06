import Page from "../components/Page";

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <h1>App Level</h1>
      <Component {...pageProps} />
    </Page>
  );
}
