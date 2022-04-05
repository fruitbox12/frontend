import React from 'react';
import CreatePostBox from '../../limb/post/CreatePostBox';
import PostContainer from '../../container/PostContainer';
import Story from '../../limb/story';

const NewsFeed: React.FC = () => {
  return (
    <div className="mt-6 w-full h-full pb-5">
      {/* Story Section */}

      {/* Create Post       */}
      <CreatePostBox />
      {/* All posts */}
      <PostContainer />
    </div>
  );
};

export default NewsFeed;
