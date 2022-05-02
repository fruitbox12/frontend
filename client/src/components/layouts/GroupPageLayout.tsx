import React from 'react';
import MainContentContainer from '../common';
import Navbar from '../limb/navbar';
import Footer from '../limb/footer';
import CreatePostBox from '../limb/post/CreatePostBox';
import PostContainer from '../container/PostContainer';
const GroupPageLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <MainContentContainer>
                            {children}
  
      <div className="max-w-6xl h-full mx-auto my-3">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5">
            <div className="bg-white rounded-lg p-3 text-sm text-gray-600 shadow">
              <div className="mb-5">
                <p className="font-bold text-xl text-blue-800">Configuration Profile</p>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-cog"></i>
                  </span>
                  <p className=" text-xl text-grey-800">
                     Active Connections
                    <span className="font-semibold"></span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-"></i>
                  </span>
                  <p>
                    {' '}
                    <span className="font-semibold">
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div className="col-span-3">
            {/* Create post */}
            {/* post filter box */}
            <div className="bg-white rounded-md shadow p-2 mt-4 px-3 text-sm">
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <p className="text-xl text-gray-700 font-bold">Nodes and Services</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none">
                    <i className="fas fa-sliders-h mr-2"></i>Filters
                  </button>
                  <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none">
                    <i className="fas fa-cog mr-2"></i>Manage nodes
                  </button>
                </div>
              </div>
              <div className="flex space-x-3 text-gray-500 mt-1 -mb-1">
                <button className="font-semibold flex-1 h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
                  <i className="fas fa-bars mr-2"></i>List View
                </button>
                <button className="font-semibold flex-1 h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
                  <i className="fas fa-th-large mr-2"></i>Grid View
                </button>
              </div>
            </div>

            {/* user posts */}

            <PostContainer />
          </div>
        </div>
      </div>
      </MainContentContainer>
      <Footer />
    </div>
    
  );
};

export default GroupPageLayout;
