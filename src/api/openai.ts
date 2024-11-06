import { OpenAI } from 'openai';

const apiKey = false;

if (!apiKey) {
    console.error('La clave de API de OpenAI no está definida. Asegúrate de configurar la variable de entorno.');
}

const openai = new OpenAI({
    apiKey: apiKey || '',
});

const getAIResponse = async (messages: any) => {
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages,
        });

        return completion.choices[0].message || 'Lo siento, no entendí eso.';
    } catch (error) {
        console.error('Error al obtener la respuesta de AI:', error);
        return 'Lo siento, hubo un error al procesar tu solicitud.';
    }
};

export default getAIResponse;
