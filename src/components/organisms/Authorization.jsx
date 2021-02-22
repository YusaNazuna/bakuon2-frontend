import { useSession } from 'next-auth/client';
import Layout from '@/components/organisms/Layout';
import NoLogin from '@/components/organisms/NoLogin';
import { useRouter } from 'next/router';

function Authorization({ children }) {
  const [session, loading] = useSession();
  const router = useRouter();
  const isAdmin = router.pathname.indexOf('admin') !== -1;
  return (
    <>
      {!session && loading ? (
        <></>
      ) : !session ? (
        <NoLogin />
      ) : (
        <>
          <Layout isAdmin={isAdmin}>{children}</Layout>
        </>
      )}
    </>
  );
}

export default Authorization;
