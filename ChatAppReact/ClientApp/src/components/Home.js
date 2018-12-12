import React, { Component } from 'react';
import ChatWebsocketService from '../services/ChatWebsocketService';
import { Users } from './home/Users';
import { Chat } from './home/Chat';

export class Home extends Component {
	displayName = Home.name;
    chatWebsocketService = null;
    isSuccess = false;


	constructor(props) {
        super(props);
        if (typeof window.Username !== 'undefined') {
            this.isSuccess = true;
            this.chatWebsocketService = new ChatWebsocketService();
        }
        else {
            this.isSuccess = false;
            this.props.history.push("/");
        }
    }




    render() {
        let html = this.isSuccess ? <div className='row'>
            <div className='col-sm-3'>
                <Users websocketService={this.chatWebsocketService} />
            </div>
            <div className='col-sm-8'>
                <Chat websocketService={this.chatWebsocketService} />
            </div>
        </div> : "";



        return html;
	}
}