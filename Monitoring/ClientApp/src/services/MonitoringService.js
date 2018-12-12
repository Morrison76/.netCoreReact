import 'isomorphic-fetch';

export class MonitoringService {
	_messageAdded = null;
	_websocketService = null;

	constructor(websocketService, messageAdded) {
		this._messageAdded = messageAdded;
		this._websocketService = websocketService;
		// Chat-Nachrichten vom Server empfangen
		this._websocketService.registerMessageAdded((message) => {
			this._messageAdded(message);
		});
	}

	addMessage = (message) => {
		this._websocketService.sendMessage(message);
	}

	fetchInitialMessages = (fetchInitialMessagesCallback) => {
		fetch('api/Data/GetData')
			.then(response => response.json())
			.then(data => {
				fetchInitialMessagesCallback(data);
			});
	}
}