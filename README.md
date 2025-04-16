# AIQ - Test Your AI Knowledge

A mobile-first Next.js application that helps users learn about artificial intelligence through interactive quizzes and comprehensive study materials.

## Features

- Seven comprehensive AI topics:
  - AI Fundamentals
  - Large Language Models (LLMs)
  - Neural Networks
  - AI Ethics & Bias
  - AI in the Real World
  - History of AI
  - Technical Implementation
- Two learning modes:
  - Study Mode: Detailed content with sections and explanations
  - Test Mode: Interactive quizzes to test knowledge
- Three difficulty levels (Easy, Medium, Hard)
- Dynamic quiz generation using OpenAI's GPT-3.5
- Detailed explanations for each answer
- Score tracking and results page
- Mobile-friendly interface
- Anti-caching mechanisms for fresh quiz questions
- Navigation between study and test modes
- Optimized for factual accuracy and consistency

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

5. Open [http://localhost:3000](http://localhost:3000) with your browser to start learning

## Technology Stack

- Next.js 14 with App Router
- TypeScript
- OpenAI API
- CSS Modules
- React 18
- Local Storage for state management

## Project Structure

- `/src/app` - Next.js app router pages and layouts
  - `/api` - API routes for quiz generation
  - `/study` - Study mode pages and components
  - `/test` - Test mode pages and components
  - `/quiz` - Quiz interface components
  - `/result` - Quiz results page
- `/src/components` - Reusable React components
- `/src/types` - TypeScript type definitions
- `/src/data` - Study content and topic definitions

## Features in Detail

### Study Mode

- Comprehensive content for each AI topic
- Organized in sections with clear explanations
- Easy navigation between topics
- Direct access to quiz mode for each topic

### Test Mode

- Dynamic quiz generation for each topic
- Three difficulty levels
- Randomized question order
- Detailed explanations for correct answers
- Score tracking and performance feedback
- Option to retake quizzes or study more

### Quiz System

- OpenAI-powered question generation
- Factually accurate content
- Anti-caching for fresh questions
- Randomized answer positions
- Comprehensive feedback and explanations

## License

MIT
