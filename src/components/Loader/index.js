import React, { Component } from 'react';

import './index.css';

export default class Loader extends Component {
  render() {
    return (
        <div className="PageLoading">
            <div className="lds-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
      </div>
    );
  }
}