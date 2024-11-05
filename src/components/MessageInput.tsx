import { useState } from 'react';
import '../App.css'

const MessageInput = ({ handleSubmitMessage }: any) => {
    const [input, setInput] = useState('');
    const [enabled, setEnabled] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let message = event.target.value;
        setInput(message);
        if (message.trim() !== '') {
            setEnabled(true);
        }
        else {
            setEnabled(false);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('holi');

        if (enabled) {
            console.log('holi2');

            handleSubmitMessage(input)
            setInput('');
            setEnabled(false);
        }
        else {
            setInput('');
            setEnabled(false);
        }
    };

    return (
        <div className='message-input'>
            <div className='message-input-box'>
                <input
                    onChange={handleInputChange}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(e) }}
                    value={input}
                    type="text"
                    className="styled-input"
                    placeholder="Escribe aquí..." />
                <div className='input-send-container' onClick={(e) => handleSubmit(e)}>
                    <span className={`material-icons ${enabled ? 'enabled-send-icon' : 'disabled-send-icon'}`}>
                        send
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MessageInput
