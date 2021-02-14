import { useSession } from 'next-auth/client';
import Layout from '@/components/organisms/Layout';
import NoLogin from '@/components/organisms/NoLogin';

function Authorization({ children }) {
  const [session, loading] = useSession();

  return (
    <>
      {!session && loading ? (
        <></>
      ) : !session ? (
        <NoLogin />
      ) : (
        <>
          <Layout>{children}</Layout>
        </>
      )}
    </>
  );
}

export default Authorization;
