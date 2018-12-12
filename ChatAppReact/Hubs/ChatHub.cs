using ChatAppReact.Services;
using ChatAppReact.User;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace ChatAppReact.Hubs
{
	public class ChatHub : Hub
	{
		private readonly IChatService _chatService;
		private readonly IUserTracker _userTracker;

		public ChatHub(IChatService chatService, IUserTracker userTracker)
		{
			_userTracker = userTracker;
			_chatService = chatService;
		}

		public void AddMessage(string username, string message)
		{
			var chatMessage = _chatService.CreateNewMessage(username, message);
            Clients.All.SendAsync("MessageAdded", chatMessage);
		}

		public override Task OnConnectedAsync()
		{
			return base.OnConnectedAsync();
		}

		public override Task OnDisconnectedAsync(Exception exception)
		{
			_userTracker.RemoveUser(Context.ConnectionId);
			return base.OnDisconnectedAsync(exception);
		}

		public void UserConnected(string username)
		{
			var id = Context.ConnectionId;
			_userTracker.AddUser(id, username);
		}
	}
}