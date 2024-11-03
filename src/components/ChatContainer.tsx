import '../App.css'
import MessageInput from './MessageInput'
import MessageList from './MessageList'
import Header from './Header'
import { useState } from 'react'

const ChatContainer = () => {
    const [messages, setMessages] = useState([]);

    return (
        <div className='chat-container'>
            <Header />
            <MessageList messages={messages} />
            <MessageInput messages={messages} setMessages={setMessages} />
        </div>
    )
}

export default ChatContainer
