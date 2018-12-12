using Microsoft.Extensions.Configuration;
using ChatAppReact.Models;
using System.Collections.Generic;
using System.Linq;

namespace ChatAppReact.Services
{
    public class ChatMessageRepository : IChatMessageRepository
    {
        public static List<ChatMessage> ChatMessages = new List<ChatMessage>();

        public ChatMessageRepository(IConfiguration configuration)
        {
            
        }

        public IEnumerable<ChatMessage> GetTopMessages(int number = 100)
        {
            return ChatMessages.Take(number).ToList();
        }

        public void AddMessage(ChatMessage message)
        {
            ChatMessages.Add(message);
        }
    }
}
