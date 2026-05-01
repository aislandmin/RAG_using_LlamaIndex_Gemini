// Load environment variables from .env file
require("dotenv").config({ override: true });

const { VectorStoreIndex, SimpleDirectoryReader, Settings } = require("llamaindex");
const { Gemini, GeminiEmbedding } = require("@llamaindex/google");

const { GoogleGenAI } = require("@google/genai");

async function main() {
  const apiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : "";

  // 0. Configure LlamaIndex to use Gemini
  Settings.llm = new Gemini({
    model: "gemini-2.5-flash",
    apiKey: apiKey,
  });

  const embedModel = new GeminiEmbedding({
    model: "gemini-embedding-001",
    apiKey: apiKey,
  });

  // Fix: GeminiEmbedding.getQueryEmbedding returns null in some versions
  // Redirect it to the working getTextEmbedding method
  embedModel.getQueryEmbedding = embedModel.getTextEmbedding;
  Settings.embedModel = embedModel;

  // 1. Retrieval (load documents from directory)
  const documents = await new SimpleDirectoryReader()
    .loadData({ directoryPath: "./data" });
  console.log(`Loaded ${documents.length} documents.`);

  // 2. Create VectorStoreIndex for retrieval
  const index = await VectorStoreIndex.fromDocuments(documents);
  console.log("Index created.");

  // 3. Create query engine for information retrieval
  const queryEngine = index.asQueryEngine();

  // 4. User query for information retrieval
  const queryText = "What is the estimated population of the Earth?";
  const response = await queryEngine.query({
    query: queryText,
  });

  // 5. Retrieved information (assuming relevant passage)
  const retrievedInfo = response.toString();

  // 6. Custom LLM configuration (using the new SDK for the final story generation)
  const ai = new GoogleGenAI({ apiKey: apiKey });

  // 7. Prompt construction (augmentation with retrieved info)
  const prompt = `Write a short story about the following information: ${retrievedInfo}`;

  // 8. Text generation using Gemini (via the new @google/genai SDK)
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  const generatedText = result.text;

  // 9. Output response
  console.log("Retrieved information:");
  console.log(retrievedInfo);
  console.log("\nGenerated story:");
  console.log(generatedText);
}

main().catch(console.error);