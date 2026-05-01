# Project Conventions: LlamaIndex Gemini Example

## Architecture
- **Framework:** Node.js with `llamaindex` and `@llamaindex/google` for RAG (Retrieval-Augmented Generation).
- **LLM:** Google Gemini via `@google/genai`.
- **Embeddings:** Google Gemini via `@llamaindex/google` (Overriding the default LlamaIndex OpenAI integration).

## Development Workflow
- **Environment Variables:** Requires a `GEMINI_API_KEY` in a `.env` file.
- **Entry Point:** `llamaindex-gemini.js`.
- **Retrieval:** Uses `SimpleDirectoryReader` to load local documents and `VectorStoreIndex` with `GeminiEmbedding`.

## Code Style
- Follow standard JavaScript (CommonJS) conventions.
- Use `Settings` in `llamaindex` to configure global providers.

## Dependencies
- `llamaindex`: For document loading and indexing.
- `@llamaindex/google`: For Gemini-specific LlamaIndex integration.
- `@google/genai`: For interfacing with the Gemini API directly.
- `dotenv`: For managing environment variables.
