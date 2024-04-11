import React from 'react';
import SideBar from './SideBar';
import TopHeader from './TopHeader';

const Layout = (props) => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='w-full'>
        <TopHeader />
        <div className='pt-appBigGap pl-appBigGap'>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
