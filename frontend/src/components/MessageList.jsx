import MessageBubble from './MessageBubble';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          sender={message.sender}
          content={message.content}
        />
      ))}
    </div>
  );
}

export default MessageList;
