const Groq = require("groq-sdk");
require('dotenv').config();
const apiKey = process.env.LLAMA3_API_KEY;
const modelName = 'llama3-8b-8192';
const groq = new Groq({ apiKey: apiKey });
async function main(prompt) {
    const chatCompletion = await getGroqChatCompletion(prompt);
    console.log('Message Content:', chatCompletion.choices[0]?.message?.content || "");
}
async function getGroqChatCompletion(prompt) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: prompt
            },
            {
                role: "system",
                content: "You are too nice!",
            },
        ],
        model: modelName,
    });
}
main("389+3998");