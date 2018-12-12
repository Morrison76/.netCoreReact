import 'isomorphic-fetch';

export class UsersService {
	_userLoggedOn = null;
	_userLoggedOff = null;
	_websocketService = null;

	constructor(websocketService, socketCallback, socketCloseCallback) {
		this._userLoggedOn = socketCallback;
		this._userLoggedOff = socketCloseCallback;
		this._websocketService = websocketService;

		// Receive Chat Users from server
        websocketService.registerUserLoggedOn((user) => {
            console.log("loggedOn");
			this._userLoggedOn(user);
		});

		websocketService.registerUserLoggedOff((user) => {
            console.log("loggedOff");
            this._userLoggedOff(user);
		});
	}

    fetchLogedOnUsers = (fetchUsersCallback) => {
        console.log(1);
		fetch('api/Users/LoggedOnUsers')
			.then(response => response.json())
			.then(data => {
				fetchUsersCallback(data);
			});
	}
}