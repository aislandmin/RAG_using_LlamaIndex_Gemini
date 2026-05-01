require("dotenv").config({ override: true });
const { GeminiEmbedding } = require("@llamaindex/google");

async function testEmbedding() {
  try {
    const apiKey = process.env.GEMINI_API_KEY.trim();
    const embedModel = new GeminiEmbedding({
      model: "gemini-embedding-001",
      apiKey: apiKey,
    });
    
    console.log("Monkey-patching getQueryEmbedding...");
    embedModel.getQueryEmbedding = embedModel.getTextEmbedding;
    
    const result = await embedModel.getQueryEmbedding("Hello world");
    console.log("Result length:", result ? result.length : "NULL");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

testEmbedding();