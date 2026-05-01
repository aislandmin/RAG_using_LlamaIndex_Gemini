# LlamaIndex Gemini Example

This project demonstrates a basic Retrieval-Augmented Generation (RAG) pipeline using **LlamaIndex** and **Google Gemini**. It retrieves information from local data files and uses it to augment a prompt for text generation.

## Features
- **Document Loading:** Reads text data from the `./data` directory using LlamaIndex.
- **Indexing:** Creates a vector store index for efficient information retrieval.
- **RAG Pipeline:** Queries the index and uses the results to provide context to the Gemini LLM.
- **Text Generation:** Generates creative content (e.g., a short story) based on the retrieved context.

## Prerequisites
- Node.js installed.
- A Google Gemini API Key.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aislandmin/RAG_using_LlamaIndex_Gemini.git
    cd RAG_using_LlamaIndex_Gemini
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Copy the `.env.example` file to a new file named `.env`:
    ```bash
    cp .env.example .env
    ```
    Then, open `.env` and add your Google Gemini API key:
    ```env
    GEMINI_API_KEY=your_api_key_here
    ```

4.  **Add Data:**
    Place any text files you want to use as context in the `data/` folder.

## Usage

Run the main script:
```bash
node llamaindex-gemini.js
```

The script will:
1.  Load the data from `./data/data.txt`.
2.  Query the data for the population of the Earth.
3.  Use the retrieved information to augment a prompt.
4.  Print the retrieved information and the generated story to the console.

### Example Output
```text
Loaded 1 documents.
Index created.
Retrieved information:
The population of the Earth is estimated to be over 8 billion people.

Generated story:
The city hummed, a low, constant thrum that felt less like noise and more like the very pulse of life itself. Elara, pressed into the morning commute, felt it deep in her bones. She wasn't just *in* the crowd; she was *of* it, a single grain in an endless, shifting beach.

She glanced at the man across from her, his face buried in a worn paperback. Next to him, a young woman meticulously applied eyeliner, her reflection a tiny, determined spark in the train window. Behind her, two students debated a physics problem in hushed, excited tones. Eight billion. The number had popped into her head during her morning coffee, an almost incomprehensible statistic.

Eight billion lives.

It wasn't just the faces she saw on this train, or the thousands streaming past her office window, or the millions that populated her city. It was every remote village elder, every high-rise CEO, every child in a bustling market, every quiet artist in a studio apartment, every scientist staring at distant stars, every farmer tending ancient soil.

Each one, a universe. A tapestry of memories, fears, dreams, and untold stories. Eight billion heartbeats, each a tiny, precious drum solo in the grand, chaotic symphony of existence.

For a moment, the sheer scale of it threatened to overwhelm her. How could one life matter in such an immense ocean? How could one voice be heard in such a cacophony?

But then, the train lurched, and a small girl, clutching a bright red balloon, giggled, her joy infectious. A weary man offered her seat to an elderly woman, a silent gesture of kindness that rippled through their small carriage. The physics students finally found their solution, a shared "aha!" lighting their faces.

Elara smiled. It wasn't about being lost in the crowd. It was about being part of something so vast, so incredibly diverse, so endlessly unfolding. It was the knowledge that somewhere, right now, someone was falling in love, someone was discovering a cure, someone was bringing a new life into the world, someone was saying goodbye, someone was simply breathing, just like her.

The train reached her stop. As she stepped out, joining the river of humanity flowing onto the platform, the city's hum didn't feel like noise anymore. It felt like connection. Eight billion possibilities, unfolding, moment by precious moment, on this one astonishing planet. And she, Elara, was one of them.
```

## Embedding Configuration
By default, **LlamaIndex** uses OpenAI's API for embeddings. In this project, we have explicitly configured it to use **Google Gemini** embeddings to maintain consistency within the Google ecosystem and avoid dependency on OpenAI.

This is achieved by setting `Settings.embedModel` to an instance of `GeminiEmbedding` from the `@llamaindex/google` package.

## Project Structure
- `llamaindex-gemini.js`: The main application logic.
- `data/`: Directory containing source documents for retrieval.
- `.env`: Environment configuration (ignored by git).
- `package.json`: Project dependencies and metadata.
