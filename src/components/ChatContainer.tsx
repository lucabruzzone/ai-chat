import '../App.css'
import MessageList from './MessageList'
import Header from './Header'
import MessageInput from './MessageInput'
import { useChat } from '../hooks/useChat';


const ChatContainer = () => {
    const { handleSubmitMessage, messages, isLoadingResponse }: any = useChat([
        {
            role: 'system',
            content: `Hola amigo, soy un bot que te ayudará a responder tus preguntas. ¿En qué puedo ayudarte hoy?`,
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
