const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.GPT4_API_KEY;
const endPoint = 'https://models.inference.ai.azure.com';
const modelName = 'gpt-4o';
async function interactWithAPI(prompt) {
    try {
        const response = await axios.post(
            `${endPoint}/openai/deployments/${modelName}/chat/completions`,
            {
                model: modelName,
                messages: [
                    {
                        role: 'system',
                        content: 'You are too nice!'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: 100
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': apiKey,
                    'x-ms-model-mesh-model-name': modelName
                }
            }
        );
        const messageContent = response.data.choices[0].message.content;
        console.log('Response:', messageContent);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

interactWithAPI('8329983289+3289982938=?');