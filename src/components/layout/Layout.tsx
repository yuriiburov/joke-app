import { FC, PropsWithChildren } from 'react';
import Sidebar from '../sidebar/Sidebar';
import classes from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
