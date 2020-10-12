import React, { Component } from 'react';

import HeaderNav from '../../components/HeaderNav/index';
import ListVideo from '../../components/ListVideo/index';


import './index.css'

export default class Home extends Component {
  render() {

    /*Key to be authorized to consume the API */
    const Key = 'AIzaSyAsHuSOuVB3boHy7N4OoMp0687Ehx_MkQE';
    return (
      <div className="Home-page">
      {/*Call componenets page home */}
        <HeaderNav />
        {/*Send key for props*/}
        <ListVideo Key={Key}/>
      </div>
    );
  }
}