import '../App.css';

const Message = ({ role, content }: any) => {
    return (
        <div className={`message-container ${role === 'user' ? 'user' : 'bot'}`}>
            <div className={`message-bubble ${role === 'user' ? 'user' : 'bot'}`}>
                <p className={`message-text ${role === 'user' ? 'user' : 'bot'}`}>{content}</p>
            </div>
        </div>
    );
};

export default Message;
