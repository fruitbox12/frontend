import React from 'react';
import MainContentContainer from '../common';
import Navbar from '../limb/navbar';
import Footer from '../limb/footer';

const GamingPageLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <MainContentContainer>{children}</MainContentContainer>
      <Footer />

    </div>
    
  );
};

export default GamingPageLayout;
