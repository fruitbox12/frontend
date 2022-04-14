import React from 'react';
import RoadMapSVG from './RoadMapSVG';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { EditorView } from '@codemirror/view';

const GamingPage = () => {
  
  return <CodeMirror
  value="print('Hello')"
  height="400px"
  maxWidth="800px"
  extensions={[python()]}
  theme="light"
  onChange={(value, viewUpdate) => {
    console.log('value:', value);
  }}
  
/>;

};

export default GamingPage;
