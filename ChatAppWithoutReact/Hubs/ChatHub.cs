using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatAppWithoutReact.Hubs
{
   public class ChatHub : Hub
    {
        public async Task Send(string message, string userName)
        {
            await Clients.All.SendAsync("Send", message, userName);
        }

        public async Task OnConnected(string userName)
        {
            var user = Context.User;

            await Clients.All.SendAsync("OnConnected", userName);
        }
    }
}
