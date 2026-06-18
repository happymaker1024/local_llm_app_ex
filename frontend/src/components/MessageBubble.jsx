import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MessageBubble({ sender, content }) {
  return (
    <div className={`message-bubble ${sender}`}>
      <div className="message-sender">{sender === 'user' ? '나' : 'LLM'}</div>
      <div className="message-content markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MessageBubble;
