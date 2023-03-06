import { Profile } from '@/models/profile';
import { PropsWithChildren } from 'react';

type LayoutProps = {
  profile?: Profile;
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  return <>
    <header>header</header>
    {props.children}
    <footer>footer</footer>
  </>
}

export default Layout;
export type {
  LayoutProps,
}
