import React from 'react';
import Post from '../limb/post';

const PostContainer: React.FC = () => {
  return (
    <div className="mt-5 w-full h-full">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostContainer;
