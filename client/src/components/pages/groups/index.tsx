import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import CreatePostBox from '../../limb/post/CreatePostBox';
import PostContainer from '../../container/PostContainer';

const GamingPage = () => {
  
  return <div><CodeMirror
  value="#Configure Node Profiles"
  height="500"
  maxWidth="200"
  extensions={[python()]}
  theme="light"
  onChange={(value) => {
    console.log('value:', value);
  }}
/>
<div><p className="font-semibold focus:outline-none hover:bg-grey-600"> You can configure your connected node peers to run services, infrastructure and deployments </p></div>
<PostContainer/>

<div className="flex items-center space-x-2">
                <button className="px-3 py-1.5 rounded-md bg-primary hover:bg-blue-600 text-white font-semibold focus:outline-none">
                  <i className="fas fa-plus-circle  mr-2"></i>Deploy Changes
                </button>
                <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none">
                  <i className="fas fa-pen mr-2"></i>Edit Node Configuration Profile
                </button>
                <button className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 font-semibold focus:outline-none">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div></div>;

};

export default GamingPage;
