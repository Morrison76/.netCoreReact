using ChatAppReact.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChatAppReact.Services
{
    public interface IChatService
    {
        IEnumerable<ChatMessage> GetAllInitially();
        ChatMessage CreateNewMessage(string senderName, string message);
    }
}