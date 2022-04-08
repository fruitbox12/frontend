import render from '@testing-library/react';
import React from 'react';
import ReactDOM from "react-dom";
import NewsFeedScreen from './NewsFeed';


class WatchPage extends React.Component {
  render() {
    return (<div><NewsFeedScreen />
      </div>);
  }
};




export default WatchPage;