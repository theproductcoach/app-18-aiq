# AIQ - Test Your AI Knowledge

A mobile-first Next.js application that quizzes users on their knowledge of artificial intelligence topics.

## Features

- Multiple AI topics to choose from (General, History, Technical, Future)
- Three difficulty levels (Easy, Medium, Hard)
- Dynamic quiz generation using OpenAI's GPT-3.5
- Mobile-friendly interface
- Detailed explanations for each answer
- Score tracking and results page

## Prerequisites

- Node.js 18.17 or later
- OpenAI API key

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your OpenAI API key:

   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to start the quiz

## Technology Stack

- Next.js 14
- TypeScript
- OpenAI API
- CSS Modules
- React 18

## Project Structure

- `/src/app` - Next.js app router pages and components
- `/src/app/api` - API routes for quiz generation
- `/src/types` - TypeScript type definitions

## License

MIT
