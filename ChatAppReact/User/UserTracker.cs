using ChatAppReact.Hubs;
using ChatAppReact.Models;
using Microsoft.AspNetCore.SignalR;
using StackExchange.Redis;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

namespace ChatAppReact.User
{
	public class UserTracker : IUserTracker
	{
		private readonly IHubContext<ChatHub> _chatHubContext;
        private static Dictionary<string, string> _cache = new Dictionary<string, string>();

		public UserTracker(IHubContext<ChatHub> chatHubContext)
		{
			_chatHubContext = chatHubContext;
		}

		public void AddUser(string sid, string name)
		{
			if (!_cache.ContainsKey(sid))
			{
				var user = new UserDetails
				{
					Id = sid,
					Name = name
				};
                _cache.Add(sid, name);
				_chatHubContext.Clients.All.SendAsync("UserLoggedOn", user);
			}
		}

		public void RemoveUser(string sid)
		{
			string name = _cache.FirstOrDefault(c=>c.Key == sid).Value;
			if (!string.IsNullOrEmpty(name))
			{
				var user = new UserDetails
				{
					Id = sid,
					Name = name
				};
				_cache.Remove(sid);
				_chatHubContext.Clients.All.SendAsync("UserLoggedOff", user);
			}
		}

		public IEnumerable<UserDetails> UsersOnline()
		{
			List<UserDetails> users = new List<UserDetails>();
			users = _cache.Select(u => new UserDetails()
			{
				Id = u.Key,
				Name = u.Value
			}).ToList();

			return users;
		}
	}
}