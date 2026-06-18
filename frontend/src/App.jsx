import { useEffect, useState } from 'react'
import { fetchModels, sendChatRequest } from './api/chatApi'
import SettingsPanel from './components/SettingsPanel'
import MessageList from './components/MessageList'
import ChatInput from './components/ChatInput'
import './App.css'

function App() {
  const [models, setModels] = useState([])
  const [selectedModel, setSelectedModel] = useState('')
  const [systemPrompt, setSystemPrompt] = useState(
    '너는 초보자를 돕는 AI 강사다. 답변은 명확하고 간결하게 작성한다.'
  )
  const [temperature, setTemperature] = useState(0.7)
  const [topP, setTopP] = useState(0.9)
  const [numPredict, setNumPredict] = useState(256)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadModels() {
      try {
        const modelsFromApi = await fetchModels()
        setModels(modelsFromApi)
        if (modelsFromApi.length > 0) {
          setSelectedModel(modelsFromApi[0])
        }
      } catch (err) {
        console.error(err)
        setError('모델 목록을 가져오는 중 오류가 발생했습니다.')
      }
    }

    loadModels()
  }, [])

  const handleSend = async () => {
    if (!message.trim()) {
      alert('질문을 입력하세요.')
      return
    }

    const userMessage = message.trim()
    setMessages((prev) => [...prev, { sender: 'user', content: userMessage }])
    setMessage('')
    setError('')
    setIsLoading(true)

    try {
      const response = await sendChatRequest({
        message: userMessage,
        model: selectedModel,
        system_prompt: systemPrompt,
        temperature,
        top_p: topP,
        num_predict: numPredict,
      })
      setMessages((prev) => [
        ...prev,
        { sender: 'assistant', content: response.message },
      ])
    } catch (err) {
      console.error(err)
      setError('서버 요청 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setMessages([])
    setMessage('')
    setError('')
  }

  return (
    <div className="chat-page">
      <div className="chat-shell">
        <aside className="panel-left">
          <div className="panel-card">
            <div className="panel-title">모델 설정</div>
            <SettingsPanel
              models={models}
              selectedModel={selectedModel}
              onModelChange={setSelectedModel}
              systemPrompt={systemPrompt}
              onSystemPromptChange={setSystemPrompt}
              temperature={temperature}
              onTemperatureChange={setTemperature}
              topP={topP}
              onTopPChange={setTopP}
              numPredict={numPredict}
              onNumPredictChange={setNumPredict}
              onReset={handleReset}
            />
          </div>
        </aside>

        <main className="panel-right">
          <header className="chat-header">
            <div>
              <h1>Local LLM Chat</h1>
              <p>React + FastAPI + Ollama 기반 로컬 AI 채팅 앱</p>
            </div>
            <button className="reset-button header-button" onClick={handleReset}>
              대화 초기화
            </button>
          </header>

          <div className="chat-window">
            <div className="chat-box">
              {messages.length === 0 ? (
                <div className="empty-chat-placeholder">
                  첫 질문을 입력하고 전송하면 AI가 답변합니다.
                </div>
              ) : (
                <MessageList messages={messages} />
              )}
            </div>
            <div className="status-bar">
              <span>선택 모델: {selectedModel || '불러오는 중...'}</span>
              <span>{isLoading ? '응답 생성 중...' : 'FastAPI /chat API와 연결됨'}</span>
            </div>
            {error && <div className="error-message">{error}</div>}
            <ChatInput
              message={message}
              onChange={setMessage}
              onSubmit={handleSend}
              isLoading={isLoading}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
