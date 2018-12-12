using ChatAppReact.Hubs;
using ChatAppReact.Models;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Linq;

namespace ChatAppReact.User
{
	public class UserTracker : IUserTracker
	{
		private readonly IHubContext<ChatHub> _chatHubContext;
        public static List<UserDetails> UsersOnlineItems = new List<UserDetails>();

        public UserTracker(IHubContext<ChatHub> chatHubContext)
		{
			_chatHubContext = chatHubContext;
		}

		public void AddUser(string sid, string name)
		{
			if (UsersOnlineItems.FirstOrDefault(c => c.Id == sid) == null)
			{
				var user = new UserDetails
				{
					Id = sid,
					Name = name
				};
                UsersOnlineItems.Add(user);
				_chatHubContext.Clients.All.SendAsync("UserLoggedOn", user);
			}
		}

		public void RemoveUser(string sid)
		{
			string name = UsersOnlineItems.FirstOrDefault(c=>c.Id == sid).Name;
			if (!string.IsNullOrEmpty(name))
			{
				var user = new UserDetails
				{
					Id = sid,
					Name = name
				};
                UsersOnlineItems.Remove(user);
				_chatHubContext.Clients.All.SendAsync("UserLoggedOff", user);
			}
		}

        public IEnumerable<UserDetails> UsersOnline() => UsersOnlineItems;
    }
}