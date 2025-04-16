import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import type { QuizQuestion, Topic } from '@/types/quiz';

const TOPIC_PROMPTS: Record<Topic, string> = {
  'fundamentals': 'fundamental concepts of artificial intelligence, including basic terminology, core principles, and key concepts',
  'llms': 'Large Language Models (LLMs), including their architecture, capabilities, limitations, and recent developments',
  'neural-networks': 'neural networks and deep learning, including network architecture, training processes, and applications',
  'ethics': 'AI ethics and bias, including fairness, transparency, accountability, and societal implications',
  'real-world': 'real-world applications of AI across different industries, current implementations, and practical use cases',
  'history': 'the history of artificial intelligence, including key developments, breakthroughs, and influential figures'
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function isValidQuizQuestion(question: any): question is QuizQuestion {
  return (
    typeof question === 'object' &&
    typeof question.question === 'string' &&
    Array.isArray(question.options) &&
    question.options.length === 4 &&
    question.options.every((opt: unknown) => typeof opt === 'string') &&
    typeof question.correctAnswer === 'number' &&
    question.correctAnswer >= 0 &&
    question.correctAnswer <= 3 &&
    typeof question.explanation === 'string'
  );
}

function validateAndCleanResponse(response: string): QuizQuestion[] {
  try {
    let parsed;
    try {
      parsed = JSON.parse(response);
    } catch (e) {
      // Try to extract JSON if it's wrapped in markdown or other text
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No valid JSON found in response');
      }
      parsed = JSON.parse(jsonMatch[0]);
    }

    // If we got a wrapper object with a questions array
    if (parsed.questions && Array.isArray(parsed.questions)) {
      parsed = parsed.questions;
    }

    if (!Array.isArray(parsed)) {
      throw new Error('Response is not an array');
    }

    if (parsed.length !== 5) {
      throw new Error(`Expected 5 questions, got ${parsed.length}`);
    }

    // Validate each question
    const validQuestions = parsed.every(isValidQuizQuestion);
    if (!validQuestions) {
      throw new Error('One or more questions have invalid format');
    }

    return parsed;
  } catch (error) {
    console.error('Response validation error:', error);
    console.error('Raw response:', response);
    throw error;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const difficulty = searchParams.get('difficulty');
  const topic = searchParams.get('topic') as Topic;

  if (!difficulty || !topic || !(topic in TOPIC_PROMPTS)) {
    return NextResponse.json(
      { error: 'Missing or invalid difficulty or topic parameter' },
      { status: 400 }
    );
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a quiz generator. You must return a JSON object containing an array of exactly 5 quiz questions about ${TOPIC_PROMPTS[topic]} at ${difficulty} difficulty level.

Return ONLY a JSON object in this exact format:
{
  "questions": [
    {
      "question": "What is X?",
      "options": [
        "First option",
        "Second option",
        "Third option",
        "Fourth option"
      ],
      "correctAnswer": 0,
      "explanation": "Explanation why the first option is correct"
    }
  ]
}

Requirements:
1. Return ONLY the JSON object, no other text
2. The questions array MUST contain exactly 5 questions
3. Each question MUST have exactly 4 options
4. correctAnswer MUST be a number 0-3 indicating the index of the correct option
5. All questions must be about ${TOPIC_PROMPTS[topic]}
6. All questions must be at ${difficulty} difficulty level
7. Each explanation must be clear and educational`
        }
      ],
      temperature: 0.7,
      response_format: { type: "json_object" }
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No response from OpenAI');
    }

    // Validate and clean the response
    const questions = validateAndCleanResponse(response);

    // Add IDs to the questions
    const questionsWithIds = questions.map((q, index) => ({
      ...q,
      id: index,
    }));

    return NextResponse.json(questionsWithIds);
  } catch (error) {
    console.error('Error generating quiz questions:', error);
    
    // Return a more specific error message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        error: 'Failed to generate quiz questions',
        details: errorMessage
      },
      { status: 500 }
    );
  }
} 