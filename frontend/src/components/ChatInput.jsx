function ChatInput({ message, onChange, onSubmit, isLoading }) {
  return (
    <div className="chat-input-panel">
      <textarea
        value={message}
        onChange={(event) => onChange(event.target.value)}
        rows={2}
        placeholder="질문을 입력하세요. FastAPI와 React를 연결하는 이유를 설명해줘. (Shift+Enter: 줄바꿈)"
      />
      <button onClick={onSubmit} disabled={isLoading}>
        {isLoading ? '응답 생성 중...' : '전송'}
      </button>
    </div>
  );
}

export default ChatInput;
