import { useState } from 'react';
import axios from 'axios';

export const useChat = (initialMessages: any) => {
    const [messages, setMessages] = useState(initialMessages);

    const handleSubmitMessage = async (input: any) => {
        console.log('entraaaa');

        const userMessage = { role: 'user', content: input, id: crypto.randomUUID() };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);

        try {
            const res = await axios.post('http://localhost:5000/api/chat', {
                messages: updatedMessages,
            });

            const aiResponse = res.data.content;

            setMessages((prevMessages: any) => [
                ...prevMessages,
                { role: 'system', content: aiResponse, id: crypto.randomUUID() }
            ]);
        } catch (error) {
            console.error('Error al llamar a la API:', error);
        }
    };

    return { handleSubmitMessage, messages };
};
