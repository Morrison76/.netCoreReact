import * as signalR from "@aspnet/signalr";

class MonitoringWebsocketService {
	_connection = null;

    constructor() {
        let url = `${document.location.protocol}//${document.location.host}/monitoring`;
		this._connection = new signalR.HubConnectionBuilder()
            .withUrl(url)
            .configureLogging({
                log: function (logLevel, message) {
                    console.log(new Date().toISOString() + ": " + message);
                }
            })
			.build();
        this._connection.start().then(() => {
            this._connection.invoke("UserConnected", window.Username);
        }).catch(err => document.write(err));
	}

	//registerInformationAdded(informationAdded) {
	//	// get other client chat message from the server
 //       this._connection.on('newInformation', (data) => {
 //           informationAdded(data);
	//	});
 //   }



}
export default MonitoringWebsocketService;