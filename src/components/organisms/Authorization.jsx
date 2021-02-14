import { useSession } from 'next-auth/client';
import Layout from '@/components/organisms/Layout';
import NoLogin from '@/components/organisms/NoLogin';

function Authorization({ children }) {
  const [session, loading] = useSession();

  return (
    <>
      <main>
        {!session && loading ? (
          <></>
        ) : !session ? (
          <NoLogin />
        ) : (
          <>
            <Layout>{children}</Layout>
          </>
        )}
      </main>
    </>
  );
}

export default Authorization;
