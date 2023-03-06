// import '@/styles/globals.css';
import type { AppProps, } from 'next/app';
import { SessionProvider, } from 'next-auth/react';
import { Session, } from 'next-auth';
import { appWithTranslation, } from 'next-i18next';

type appProps = AppProps<{
  session: Session,
}>

const App = ({
  Component,
  pageProps: {
    session,
    ...pageProps
  },
}: appProps) => {
  return <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
}

export default appWithTranslation(App);
