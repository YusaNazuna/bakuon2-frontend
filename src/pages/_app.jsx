import { Provider } from 'next-auth/client';
import Head from 'next/head';
import '@/styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider
      options={{
        clientMaxAge: 0,
        keepAlive: 0
      }}
      session={pageProps.session}
    >
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
