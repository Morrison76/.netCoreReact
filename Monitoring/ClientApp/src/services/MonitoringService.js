import 'isomorphic-fetch';

export class MonitoringService {
    _informationAdded = null;
	_websocketService = null;

	constructor(websocketService, informationAdded) {
        this._informationAdded = informationAdded;
		this._websocketService = websocketService;
		// Chat-Nachrichten vom Server empfangen
  //      this._websocketService.registerInformationAdded((data) => {
  //          this._informationAdded(data);
		//});
    }



}