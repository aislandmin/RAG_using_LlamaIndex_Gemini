require("dotenv").config({ override: true });
const { GoogleGenAI } = require("@google/genai");

async function listModels() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY.trim() });
    const models = await ai.models.list();
    console.log("Response structure:", JSON.stringify(models, null, 2));
  } catch (err) {
    console.error("Error listing models:", err.message);
  }
}

listModels();