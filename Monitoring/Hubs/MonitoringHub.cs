using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Monitoring.Services;

namespace Monitoring.Hubs
{
    public class MonitoringHub : Hub
    {
        private readonly IMonitoringService _monitoringService;

        public MonitoringHub(IMonitoringService monitoringService)
        {
            _monitoringService = monitoringService;
        }


        public void Data()
        {
            Clients.All.SendAsync("NewData", "Some data");
        }

        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }
    }
}
