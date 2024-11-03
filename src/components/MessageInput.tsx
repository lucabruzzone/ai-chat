import { useState } from 'react';
import '../App.css'

const MessageInput = ({ setMessages }: any) => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [enabled, setEnabled] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let message = event.target.value;
        setCurrentMessage(message);
        if (message.trim() !== '') {
            setEnabled(true);
        }
        else {
            setEnabled(false);
        }
    };

    const handleSubmitMessage = () => {
        if (enabled) {
            const messaje_body = { role: 'user', content: currentMessage };
            setMessages((prevMessages: any) => [...prevMessages, messaje_body]);
            setCurrentMessage('');
            setEnabled(false);
        }
        else {
            setCurrentMessage('');
            setEnabled(false);
        }
    };

    return (
        <div className='message-input'>
            <div className='message-input-box'>
                <input
                    onChange={handleInputChange}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSubmitMessage() }}
                    value={currentMessage}
                    type="text"
                    className="styled-input"
                    placeholder="Escribe aquí..." />
                <div className='input-send-container' onClick={handleSubmitMessage}>
                    <span className={`material-icons ${enabled ? 'enabled-send-icon' : 'disabled-send-icon'}`}>
                        send
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MessageInput
