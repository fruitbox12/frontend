import React from 'react';
import CreatePostBox from '../../limb/post/CreatePostBox';
import PostContainer from '../../container/PostContainer';

const NewsFeed: React.FC = () => {
  return (
    <div className="mt-6 w-full h-full pb-5">
      {/* Story Section */}

      {/* Create Post       */}
      <CreatePostBox />
      <div className="w-full h-50 flex-1 flex items-center  justify-left space-x-2 overflow-hidden cursor-pointer my-6">
        <div
          className="w-48 h-48 relative rounded-xl shadow "
          style={{ backgroundImage: `url('https://i1.wp.com/pinkeyegraphics.co.uk/wp-content/uploads/Gmail-icon.png?fit=512%2C512&ssl=1)` }}
        >
          <div
            className="w-full absolute flex justify-center"
            style={{ bottom: '13%' }}
          >
            <button className="focus:outline-none z-40 w-10 h-10 bg-primary rounded-full border-4 border-white">
              <i className="text-white fas fa-plus"></i>
            </button>
          </div>
          <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg ">
            <p className="text-gray-500 text-sm font-semibold">Run Email</p>
          </div>
        </div>
        <div
          className="w-48 h-48 relative rounded-xl shadow "
          style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.5HRQtAp-SoCJ1-AhG8WcNAHaFp?w=233&h=180&c=7&r=0&o=5&pid=1.7')` }}
        >
          <div
            className="w-full absolute flex justify-center"
            style={{ bottom: '13%' }}
          >
            <button className="focus:outline-none z-40 w-10 h-10 bg-primary rounded-full border-4 border-white">
              <i className="text-white fas fa-plus"></i>
            </button>
          </div>
          <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg ">
            <p className="text-gray-500 text-sm font-semibold"> Discord </p>
          </div>
        </div>
        <div
          className="w-48 h-48 relative rounded-xl shadow "
          style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.d13iM5F_yr1MMQHwppMm3wHaGA?w=214&h=180&c=7&r=0&o=5&pid=1.7')` }}
        >
          <div
            className="w-full absolute flex justify-center"
            style={{ bottom: '13%' }}
          >
            <button className="focus:outline-none z-40 w-10 h-10 bg-primary rounded-full border-4 border-white">
              <i className="text-white fas fa-plus"></i>
            </button>
          </div>
          <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg ">
            <p className="text-gray-500 text-sm font-semibold">Tweet </p>
          </div>
        </div>
      </div>

 
      {/* All posts */}
      <PostContainer />
    </div>
  );
};

export default NewsFeed;
