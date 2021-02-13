import { Provider } from 'next-auth/client';
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
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
