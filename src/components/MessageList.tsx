import { useEffect, useRef } from 'react';
import '../App.css'
import Message from './Message'
import LoadingDot from './LoadingDot';

const MessageList = ({ messages, isLoadingResponse }: any) => {

    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div
            ref={chatContainerRef}
            className='messages-list'
        >
            <div className='message-list-box'>
                {messages?.map((msg: any, index: any) => (
                    <Message key={index} role={msg.role} content={msg.content} />
                ))}
                {isLoadingResponse && <LoadingDot />}
            </div>
        </div>
    )
}

export default MessageList
