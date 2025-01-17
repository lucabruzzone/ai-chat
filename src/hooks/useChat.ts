import { useState } from 'react';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || '';

interface ChatMessage {
    role: string;
    content: string;
    id: string;
}

export const useChat = (initialMessages: any) => {
    const [messages, setMessages] = useState(initialMessages);
    const [isLoadingResponse, setIsLoadingResponse] = useState(false);

    const handleSubmitMessage = async (input: any) => {
        const userMessage: ChatMessage = { role: 'user', content: input, id: crypto.randomUUID() };
        const updatedMessages: ChatMessage[] = [...messages, userMessage];
        setMessages(updatedMessages);

        let aiResponse = '';
        try {
            setIsLoadingResponse(true);
            const res = await axios.post(
                `${apiUrl}/api/chat`,
                updatedMessages
            );

            if (res && res.data && res.data.content) {
                aiResponse = res.data.content;
            } else {
                aiResponse = 'Lo siento, no pude entender tu mensaje';
            }
        } catch (error) {
            aiResponse = 'Lo siento, no pude entender tu mensaje';
            console.error('Error al llamar a la API:', error);
        } finally {
            setMessages((prevMessages: any) => [
                ...prevMessages,
                { role: 'system', content: aiResponse, id: crypto.randomUUID() }
            ]);
            setIsLoadingResponse(false);
        }
    };

    return { handleSubmitMessage, messages, isLoadingResponse };
};
