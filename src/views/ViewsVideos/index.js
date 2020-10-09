import React, { Component } from 'react';

import HeaderNav from '../../components/HeaderNav/index';
import ListVideo from '../../components/ListVideo/index';

export default class ViewsVideos extends Component {
  render() {
    return (
      <div className="Home-page">
        <HeaderNav />
        <ListVideo />
      </div>
    );
  }
}