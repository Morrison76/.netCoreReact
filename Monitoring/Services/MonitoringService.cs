using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Monitoring.Services
{
    public class MonitoringService: IMonitoringService
    {
        private readonly IMonitoringRepository _repository;

        public MonitoringService(IMonitoringRepository repository)
        {
            _repository = repository;
        }
    }
}
