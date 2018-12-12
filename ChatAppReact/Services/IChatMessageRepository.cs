using ChatAppReact.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChatAppReact.Services
{
    public interface IChatMessageRepository
    {
        void AddMessage(ChatMessage message);
        IEnumerable<ChatMessage> GetTopMessages(int number = 100);
    }
}
