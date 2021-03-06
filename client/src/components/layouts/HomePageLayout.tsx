import React from 'react';
import MainContentContainer from '../common';
import Navbar from '../limb/navbar';
// other code


const HomePageLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />

      <MainContentContainer>{children}</MainContentContainer>
    </div>
  );
};

export default HomePageLayout;
