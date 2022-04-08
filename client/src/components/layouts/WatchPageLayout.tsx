import React from 'react';
import MainContentContainer from '../common';
import Navbar from '../limb/navbar';

const WatchPageLayout: React.FC = (props) => {
  const { children } = props;
  return (<div>
    <div className="w-full h-full flex flex-col">
      <Navbar />

      
    </div>
    <MainContentContainer>{children}</MainContentContainer>

    </div>
  );
};

export default WatchPageLayout;
