import React from 'react';
import CreatePostBox from '../../limb/post/CreatePostBox';
import PostContainer from '../../container/PostContainer';
import Story from '../../limb/story';

const NewsFeed: React.FC = () => {
  
  return (
    <div>
     
      
      <iframe src="http://localhost:5000/api/static/" width="900" height="900"/>

      
      {/* All posts */}
      <PostContainer />
    </div>
  );
};

export default NewsFeed;
