import '../App.css'
import MessageList from './MessageList'
import Header from './Header'
import MessageInput from './MessageInput'
import { useChat } from '../hooks/useChat';


const ChatContainer = () => {
    const { handleSubmitMessage, messages, isLoadingResponse }: any = useChat([
        {
            role: 'system',
            content: `Tu eres Martín, el amigo que está pasando por un momento emocionalmente difícil...`,
            id: crypto.randomUUID(),
        },
    ]);

    return (
        <div className='chat-container'>
            <Header />
            <MessageList messages={messages} isLoadingResponse={isLoadingResponse} />
            <MessageInput handleSubmitMessage={handleSubmitMessage} />
        </div>
    )
}

export default ChatContainer
