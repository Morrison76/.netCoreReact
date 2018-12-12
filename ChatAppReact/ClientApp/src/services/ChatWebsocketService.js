import * as signalR from "@aspnet/signalr";

class ChatWebsocketService {
	_connection = null;

	constructor() {
		let url = `${document.location.protocol}//${document.location.host}/chat`;

        this._connection = new signalR.HubConnectionBuilder().withUrl(url).build();

        this._connection.start().then(() => {
			this._connection.invoke("UserConnected", window.Username);
		}).catch(err => document.write(err));
	}

    sendMessage(message) {
        this._connection.invoke('AddMessage', window.Username, message);
    }

	registerMessageAdded(messageAdded) {
		this._connection.on('MessageAdded', (message) => {
			messageAdded(message);
		});
	}

	registerUserLoggedOn(userLoggedOn) {
		this._connection.on('UserLoggedOn', (user) => {
            userLoggedOn(user);
            this._connection.invoke('AddMessage', 'Admin', 'Користувач ' + user.name + ' підключився до чату');
		});
	}

	registerUserLoggedOff(userLoggedOff) {
		this._connection.on('UserLoggedOff', (user) => {
			userLoggedOff(user);
            this._connection.invoke('AddMessage', "Admin", 'Користувач ' + user.name + ' покинув чат');
		});
	}
}
export default ChatWebsocketService;