export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>App Level</h1>
      <Component {...pageProps} />
    </>
  );
}