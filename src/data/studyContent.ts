export interface TopicContent {
  id: string;
  title: string;
  shortDescription: string;
  content: string[];
}

export const studyContent: TopicContent[] = [
  {
    id: 'fundamentals',
    title: 'AI Fundamentals',
    shortDescription: 'Learn the core concepts and principles that form the foundation of artificial intelligence.',
    content: [
      'Artificial Intelligence (AI) is a branch of computer science that aims to create intelligent machines that can perform tasks that typically require human intelligence. These tasks include visual perception, speech recognition, decision-making, language translation, and problem-solving.',
      'The foundation of AI rests on several key concepts: machine learning, which enables systems to learn from experience; knowledge representation, which allows machines to understand and store information; and algorithmic problem-solving, which helps machines find solutions to complex problems.',
      'Modern AI systems use various approaches, from rule-based systems to deep learning, to achieve their goals. While early AI focused on logic and rules, today\'s AI primarily uses data-driven approaches, learning patterns from vast amounts of information to make predictions and decisions.',
      'Understanding AI fundamentals is crucial as these technologies become increasingly integrated into our daily lives, from smartphone assistants to autonomous vehicles.'
    ]
  },
  {
    id: 'llms',
    title: 'Large Language Models (LLMs)',
    shortDescription: 'Explore how LLMs like GPT are transforming natural language processing and AI capabilities.',
    content: [
      'Large Language Models (LLMs) are advanced AI systems trained on massive amounts of text data to understand and generate human-like text. These models, such as GPT (Generative Pre-trained Transformer), have revolutionized natural language processing.',
      'LLMs work by processing text through multiple layers of attention mechanisms, learning patterns in language at various levels - from basic grammar to complex reasoning. They can perform a wide range of tasks, including writing, translation, coding, and answering questions.',
      'Despite their impressive capabilities, LLMs have limitations and challenges. They can sometimes generate incorrect information, exhibit biases present in their training data, and lack true understanding of the content they process. Understanding these limitations is crucial for responsible use of these technologies.',
      'The development of LLMs continues to advance rapidly, with improvements in efficiency, accuracy, and capabilities, making them increasingly valuable tools in various applications.'
    ]
  },
  {
    id: 'neural-networks',
    title: 'Neural Networks',
    shortDescription: 'Understand how artificial neural networks simulate brain function to solve complex problems.',
    content: [
      'Neural networks are computing systems inspired by the biological neural networks in human brains. They consist of interconnected nodes (neurons) organized in layers that process and transmit information, enabling machines to recognize patterns and solve complex problems.',
      'The basic structure includes input layers, hidden layers, and output layers. Each connection between neurons has a weight that adjusts during training, allowing the network to learn from examples. This process, known as deep learning when many layers are involved, has revolutionized AI capabilities.',
      'Neural networks excel at tasks like image and speech recognition, natural language processing, and even game playing. Their ability to learn and adapt makes them powerful tools for handling complex, real-world problems where traditional programming approaches fall short.',
      'Recent advances in neural network architectures, combined with increased computing power and data availability, have led to breakthrough achievements in AI, from self-driving cars to medical diagnosis systems.'
    ]
  },
  {
    id: 'ethics',
    title: 'AI Ethics & Bias',
    shortDescription: 'Examine the ethical considerations and challenges of AI development and deployment.',
    content: [
      'AI ethics encompasses the moral principles and guidelines that govern the development and use of artificial intelligence systems. As AI becomes more prevalent in society, understanding and addressing ethical concerns becomes increasingly crucial.',
      'One major concern is algorithmic bias, where AI systems reflect or amplify existing societal biases present in their training data. This can lead to unfair treatment in areas like hiring, lending, and criminal justice. Recognizing and mitigating these biases is essential for developing fair and equitable AI systems.',
      'Privacy and transparency are other critical ethical considerations. AI systems often require vast amounts of data, raising questions about data collection, consent, and usage. Additionally, the "black box" nature of some AI algorithms makes it difficult to understand how they reach their decisions.',
      'As AI continues to evolve, establishing clear ethical frameworks and guidelines becomes vital for ensuring these technologies benefit society while minimizing potential harm.'
    ]
  },
  {
    id: 'real-world',
    title: 'AI in the Real World',
    shortDescription: 'Discover how AI is being applied across different industries and changing our daily lives.',
    content: [
      'Artificial Intelligence is transforming numerous industries and aspects of daily life. In healthcare, AI assists in disease diagnosis, drug discovery, and personalized treatment plans. In finance, AI powers fraud detection, algorithmic trading, and risk assessment systems.',
      'Transportation is being revolutionized through self-driving vehicles and smart traffic management systems. In manufacturing, AI enables predictive maintenance, quality control, and robotic automation. Retail uses AI for inventory management, personalized recommendations, and customer service chatbots.',
      'AI is also making significant impacts in environmental protection, helping to monitor climate change, optimize energy usage, and protect wildlife. In education, AI-powered adaptive learning systems are personalizing student experiences and automating administrative tasks.',
      'As AI technology continues to advance, its applications are becoming more sophisticated and widespread, leading to increased efficiency, innovation, and new possibilities across all sectors of society.'
    ]
  },
  {
    id: 'history',
    title: 'History of AI',
    shortDescription: 'Trace the evolution of artificial intelligence from its early concepts to modern breakthroughs.',
    content: [
      'The history of Artificial Intelligence dates back to the 1950s, with the Dartmouth Conference in 1956 marking its official beginning. Early pioneers like Alan Turing, John McCarthy, and Marvin Minsky laid the theoretical foundations for machine intelligence and computation.',
      'The field has experienced several cycles of optimism and disappointment, known as "AI winters." Early rule-based systems showed promise but proved limited. The 1980s saw the rise of expert systems, while the 1990s brought advances in machine learning and neural networks.',
      'The 21st century has seen unprecedented progress, driven by increased computing power, big data, and improved algorithms. Breakthroughs in deep learning, starting with AlexNet in 2012, have led to dramatic improvements in image recognition, natural language processing, and game playing.',
      'Today, AI continues to evolve rapidly, with developments in areas like transformer models, reinforcement learning, and multimodal AI pushing the boundaries of what\'s possible.'
    ]
  },
  {
    id: 'technical-implementation',
    title: 'Technical Implementation',
    shortDescription: 'Understand the technical aspects of AI systems and their implementation.',
    content: [
      'Technical implementation of AI systems involves various components, including hardware, software, and algorithms. These components work together to enable AI systems to perform tasks and make decisions based on data.',
      'Hardware refers to the physical components of an AI system, such as CPUs, GPUs, and specialized hardware for AI tasks. Software includes the operating system, programming languages, and frameworks used to develop and run AI systems.',
      'Algorithms are the mathematical and computational methods used to train and run AI systems. These algorithms can range from simple linear models to complex neural networks. Understanding these technical aspects is crucial for developing and deploying AI systems effectively.',
      'Recent advancements in hardware and software technologies have enabled significant progress in AI, from self-driving cars to medical diagnosis systems.'
    ]
  }
];

export const quizQuestions: Record<Topic, QuizQuestion[]> = {
  "technical-implementation": [
    {
      question: "What effect does setting a temperature of 0 have on an AI model's output?",
      options: [
        "It makes the model always choose the most likely next token",
        "It makes the model's output completely random",
        "It turns off the model's ability to generate text",
        "It increases the model's creativity"
      ],
      correctAnswer: 0,
      explanation: "A temperature of 0 makes the model deterministic, always selecting the most probable next token, resulting in consistent but potentially less creative outputs."
    },
    {
      question: "What is the main purpose of Retrieval-Augmented Generation (RAG)?",
      options: [
        "To make models generate faster responses",
        "To combine language models with external knowledge retrieval",
        "To reduce the model's memory usage",
        "To create more random outputs"
      ],
      correctAnswer: 1,
      explanation: "RAG enhances model responses by combining the language model's capabilities with the ability to retrieve and reference specific information from external knowledge sources."
    },
    {
      question: "What is the primary purpose of embeddings in AI systems?",
      options: [
        "To compress data for storage",
        "To encrypt sensitive information",
        "To represent data in a way that captures semantic meaning",
        "To speed up model training"
      ],
      correctAnswer: 2,
      explanation: "Embeddings are numerical representations that capture semantic meaning, allowing similar items to be close to each other in high-dimensional space."
    },
    {
      question: "Which of the following is a common prompt engineering technique?",
      options: [
        "Random word insertion",
        "Chain-of-thought prompting",
        "Token scrambling",
        "Model retraining"
      ],
      correctAnswer: 1,
      explanation: "Chain-of-thought prompting is a technique where you ask the model to explain its reasoning step by step, often leading to more accurate and logical responses."
    },
    {
      question: "What is Top-p (nucleus) sampling used for?",
      options: [
        "To increase model training speed",
        "To reduce memory usage",
        "To control randomness by considering only the most likely tokens",
        "To compress model outputs"
      ],
      correctAnswer: 2,
      explanation: "Top-p sampling considers only the most likely tokens that sum to probability p, providing a more controlled approach to introducing randomness in model outputs."
    }
  ]
}; 