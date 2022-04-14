import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

const GamingPage = () => {
  
  return <CodeMirror
  value="print('Hello')"
  height="400px"
  maxWidth="800px"
  extensions={[python()]}
  theme="light"
  onChange={(value) => {
    console.log('value:', value);
  }}
/>;

};

export default GamingPage;
