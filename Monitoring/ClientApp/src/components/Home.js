import React, { Component } from 'react';
import MonitoringWebsocketService from '../services/MonitoringWebsocketService';
//import Monitor from './Monitor';

export class Home extends Component {
  static displayName = Home.name;
    websocketService = null;

    constructor(props) {
        super(props);
        this.websocketService = new MonitoringWebsocketService();
    }

  render () {
      return (
          <div className='row'>
              <div className='col-sm-3'>
                  
              </div>
        </div>
    );
  }
}
