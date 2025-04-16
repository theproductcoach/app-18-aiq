"use client";

import { useParams } from "next/navigation";
import StudyPageLayout from "@/components/StudyPageLayout";

const STUDY_CONTENT = {
  "ai-fundamentals": {
    title: "AI Fundamentals",
    introduction:
      "Artificial Intelligence (AI) represents one of the most transformative technologies of our time. This comprehensive guide will walk you through the core concepts, principles, and building blocks that form the foundation of modern AI systems.",
    sections: [
      {
        title: "What is Artificial Intelligence?",
        content: [
          "Artificial Intelligence refers to computer systems that can perform tasks that typically require human intelligence. These tasks include visual perception, speech recognition, decision-making, language translation, and problem-solving.",
          "At its core, AI systems process input data through various algorithms and models to produce meaningful outputs. This process involves pattern recognition, learning from examples, and applying learned knowledge to new situations.",
          "Modern AI systems range from simple rule-based programs to sophisticated neural networks that can learn and adapt from experience, making them increasingly capable of handling complex real-world challenges.",
        ],
        hasQuiz: true,
      },
      {
        title: "Machine Learning: The Engine of AI",
        content: [
          "Machine Learning is a subset of AI that focuses on developing systems that can learn from and improve with experience. Instead of following explicitly programmed rules, these systems identify patterns in data to make decisions.",
          "The learning process involves feeding the system large amounts of data, allowing it to discover patterns and relationships, and then using these insights to make predictions or decisions about new, unseen data.",
          "There are three main types of machine learning: supervised learning (learning from labeled examples), unsupervised learning (finding patterns in unlabeled data), and reinforcement learning (learning through trial and error with feedback).",
        ],
        hasQuiz: true,
      },
      {
        title: "Key Components of AI Systems",
        content: [
          "AI systems are built upon several fundamental components that work together to enable intelligent behavior. These include data processing units, learning algorithms, knowledge representation systems, and decision-making mechanisms.",
          "Data is the foundation of any AI system. High-quality, relevant data is essential for training AI models effectively. The data must be properly collected, cleaned, and preprocessed before it can be used for training.",
          "Modern AI systems also rely heavily on computational resources and sophisticated algorithms. The advancement in processing power and the development of specialized hardware has enabled increasingly complex AI applications.",
        ],
        hasQuiz: true,
      },
      {
        title: "Applications and Impact",
        content: [
          "AI has found applications across virtually every industry, from healthcare and finance to transportation and entertainment. In healthcare, AI assists in disease diagnosis and drug discovery. In finance, it powers fraud detection and algorithmic trading.",
          "The technology continues to evolve rapidly, with new breakthroughs and applications emerging regularly. This evolution is driven by improvements in computing power, algorithm design, and our understanding of intelligence itself.",
          "As AI becomes more prevalent, understanding its fundamentals becomes increasingly important for professionals across all fields, as it will continue to shape how we work, live, and interact with technology.",
        ],
        hasQuiz: true,
      },
    ],
    topic: "fundamentals",
  },
  llms: {
    title: "Large Language Models (LLMs)",
    introduction:
      "Large Language Models (LLMs) represent a revolutionary advancement in artificial intelligence, capable of understanding and generating human-like text. These sophisticated AI systems are transforming how we interact with computers and process information.",
    sections: [
      {
        title: "Understanding Large Language Models",
        content: [
          "Large Language Models are neural networks trained on massive amounts of text data to understand and generate human-like language. They learn patterns in language at multiple levels, from basic grammar to complex reasoning.",
          "These models use a transformer architecture, which allows them to process text by paying attention to different parts of the input simultaneously. This enables them to understand context and relationships between words effectively.",
          "The 'large' in LLMs refers not only to the amount of training data used but also to the number of parameters (weights) in the model, which can range from millions to hundreds of billions.",
        ],
        hasQuiz: true,
      },
      {
        title: "Capabilities and Applications",
        content: [
          "LLMs can perform a wide range of language tasks, including writing, translation, summarization, and answering questions. They can also engage in creative writing, code generation, and complex problem-solving.",
          "In professional settings, LLMs are used for content creation, customer service automation, data analysis, and programming assistance. They can help streamline workflows and enhance productivity across various industries.",
          "The versatility of LLMs comes from their ability to understand context and generate appropriate responses, making them valuable tools for both specialized tasks and general-purpose applications.",
        ],
        hasQuiz: true,
      },
      {
        title: "Limitations and Challenges",
        content: [
          "Despite their impressive capabilities, LLMs have important limitations. They can sometimes generate incorrect or misleading information, known as hallucinations, because they predict text based on patterns rather than true understanding.",
          "These models can also reflect biases present in their training data, raising concerns about fairness and ethical use. Additionally, they require significant computational resources to train and operate.",
          "Understanding these limitations is crucial for responsible deployment of LLMs in real-world applications. Users must implement appropriate safeguards and validation mechanisms.",
        ],
        hasQuiz: true,
      },
      {
        title: "Future Developments",
        content: [
          "The field of LLMs is rapidly evolving, with ongoing research focusing on improving efficiency, reliability, and ethical considerations. New architectures and training methods are being developed to address current limitations.",
          "Emerging trends include smaller, more efficient models, improved factual accuracy, and better control over model outputs. There's also growing interest in multilingual models and specialized domain adaptation.",
          "The future of LLMs likely involves more sophisticated understanding of context, better reasoning capabilities, and increased integration with other AI technologies.",
        ],
        hasQuiz: true,
      },
    ],
    topic: "llms",
  },
  "neural-networks": {
    title: "Neural Networks",
    introduction:
      "Neural networks are computing systems inspired by the biological neural networks in human brains. These sophisticated systems form the backbone of modern artificial intelligence, enabling machines to learn from experience and adapt to new situations.",
    sections: [
      {
        title: "Basic Structure and Components",
        content: [
          "Neural networks consist of interconnected nodes (neurons) organized in layers. The basic structure includes an input layer, one or more hidden layers, and an output layer. Each connection between neurons has an associated weight that determines its strength.",
          "Information flows through the network, with each neuron processing inputs using an activation function. These functions determine whether and how strongly a neuron should fire, introducing non-linearity that allows the network to learn complex patterns.",
          "The architecture of a neural network can vary greatly depending on its intended purpose, from simple feedforward networks to complex recurrent and convolutional structures.",
        ],
        hasQuiz: true,
      },
      {
        title: "Learning Process",
        content: [
          "Neural networks learn through a process called training, where they adjust their internal weights based on examples. This typically involves feeding the network large amounts of data and using backpropagation to minimize prediction errors.",
          "During training, the network compares its output with the desired result and adjusts its weights accordingly. This process is repeated many times with different examples, gradually improving the network's accuracy.",
          "The learning process requires careful balance of various factors including learning rate, batch size, and number of epochs. Too little training can result in underfitting, while too much can lead to overfitting.",
        ],
        hasQuiz: true,
      },
      {
        title: "Types and Applications",
        content: [
          "Different types of neural networks are designed for specific tasks. Convolutional Neural Networks (CNNs) excel at image processing, while Recurrent Neural Networks (RNNs) are better suited for sequential data like text or time series.",
          "Neural networks power many modern AI applications, from facial recognition and speech processing to medical diagnosis and autonomous vehicles. Their ability to learn complex patterns makes them valuable across numerous fields.",
          "Advanced architectures like Transformers have revolutionized natural language processing, while Graph Neural Networks are pushing boundaries in molecular design and social network analysis.",
        ],
        hasQuiz: true,
      },
      {
        title: "Challenges and Future Directions",
        content: [
          "Despite their success, neural networks face several challenges. They often require large amounts of training data and computational resources. Interpreting their decision-making process can also be difficult, leading to the 'black box' problem.",
          "Research continues to address these challenges through techniques like transfer learning, which allows networks to apply knowledge from one task to another, and explainable AI, which aims to make neural network decisions more transparent.",
          "Future developments focus on creating more efficient architectures, reducing energy consumption, and improving reliability. There's also growing interest in neuromorphic computing, which aims to create hardware that better mimics biological neural networks.",
        ],
        hasQuiz: true,
      },
    ],
    topic: "neural-networks",
  },
  ethics: {
    title: "AI Ethics & Bias",
    introduction:
      "AI ethics encompasses the moral principles and guidelines that govern the development and use of artificial intelligence systems. As AI becomes increasingly integrated into society, understanding and addressing ethical concerns becomes crucial for responsible innovation.",
    sections: [
      {
        title: "Fundamental Ethical Principles",
        content: [
          "AI ethics is built on core principles including fairness, transparency, accountability, and respect for human rights. These principles guide the development and deployment of AI systems to ensure they benefit society while minimizing potential harm.",
          "Ethical AI development requires considering multiple stakeholders and potential impacts across different communities and cultures. This includes examining both intended and unintended consequences of AI systems.",
          "Privacy and consent are fundamental considerations, particularly regarding data collection and usage. AI systems must respect individual rights while balancing the need for data to improve their performance.",
        ],
        hasQuiz: true,
      },
      {
        title: "Understanding AI Bias",
        content: [
          "AI bias occurs when systems exhibit unfair preferences or discrimination in their outputs. This can stem from biased training data, flawed algorithms, or unconscious biases of the developers themselves.",
          "Bias can manifest in various ways, from facial recognition systems performing poorly on certain demographics to hiring algorithms favoring particular groups. These biases can perpetuate and amplify existing societal inequalities.",
          "Addressing bias requires careful attention to data collection, algorithm design, and testing procedures. It also involves diverse teams and perspectives in the development process.",
        ],
        hasQuiz: true,
      },
      {
        title: "Transparency and Accountability",
        content: [
          "Transparency in AI systems involves making their decision-making processes understandable and explainable. This is crucial for building trust and enabling meaningful human oversight.",
          "Accountability mechanisms ensure that organizations and individuals responsible for AI systems can be held responsible for their impacts. This includes clear procedures for addressing errors and harmful outcomes.",
          "The concept of 'explainable AI' has emerged as a key focus, aiming to create systems whose decisions can be understood and interpreted by humans.",
        ],
        hasQuiz: true,
      },
      {
        title: "Future of AI Ethics",
        content: [
          "As AI technology advances, new ethical challenges continue to emerge. These include questions about AI autonomy, rights, and the long-term implications of increasingly sophisticated systems.",
          "Developing robust ethical frameworks requires ongoing collaboration between technologists, ethicists, policymakers, and the public. This includes establishing guidelines and standards for responsible AI development.",
          "Education and awareness about AI ethics are becoming increasingly important as more people interact with and are affected by AI systems in their daily lives.",
        ],
        hasQuiz: true,
      },
    ],
    topic: "ethics",
  },
  "real-world": {
    title: "AI in the Real World",
    introduction:
      "Artificial Intelligence is transforming industries and everyday life in profound ways. From healthcare and transportation to entertainment and environmental protection, AI applications are creating new possibilities and reshaping how we live and work.",
    sections: [
      {
        title: "Healthcare and Medicine",
        content: [
          "AI is revolutionizing healthcare through improved disease diagnosis, drug discovery, and personalized treatment plans. Machine learning algorithms can analyze medical images to detect conditions often faster and more accurately than human practitioners.",
          "In drug development, AI accelerates the process by predicting molecular properties and potential drug interactions. This has become particularly valuable in responding to global health challenges and developing new treatments.",
          "AI-powered systems also help in patient care management, predicting health risks, and optimizing hospital operations. Wearable devices with AI capabilities monitor health metrics in real-time, enabling preventive care.",
        ],
        hasQuiz: true,
      },
      {
        title: "Business and Finance",
        content: [
          "In the business world, AI drives everything from customer service chatbots to complex supply chain optimization. Machine learning algorithms analyze market trends and consumer behavior to inform strategic decisions.",
          "Financial institutions use AI for fraud detection, risk assessment, and algorithmic trading. These systems can process vast amounts of data in real-time, identifying patterns and anomalies that humans might miss.",
          "AI-powered automation is transforming workplace productivity, handling routine tasks and enabling humans to focus on more creative and strategic work.",
        ],
        hasQuiz: true,
      },
      {
        title: "Transportation and Logistics",
        content: [
          "The transportation sector is being revolutionized by AI through autonomous vehicles, smart traffic management, and optimized routing systems. Self-driving technology continues to advance, promising safer and more efficient travel.",
          "In logistics, AI optimizes delivery routes, warehouse operations, and inventory management. These systems can predict demand, reduce waste, and improve efficiency across the supply chain.",
          "Smart city initiatives use AI to manage traffic flow, reduce congestion, and improve public transportation services, leading to more sustainable urban environments.",
        ],
        hasQuiz: true,
      },
      {
        title: "Environmental Applications",
        content: [
          "AI plays a crucial role in environmental protection and climate change mitigation. Machine learning models analyze climate data, predict weather patterns, and optimize energy consumption in buildings and industrial processes.",
          "Conservation efforts benefit from AI through wildlife monitoring, habitat protection, and pollution detection. Satellite imagery combined with AI helps track deforestation, ocean health, and other environmental changes.",
          "Smart grid systems use AI to balance energy supply and demand, integrate renewable energy sources, and reduce waste, contributing to a more sustainable future.",
        ],
        hasQuiz: true,
      },
    ],
    topic: "real-world",
  },
  history: {
    title: "History of AI",
    introduction:
      "The history of Artificial Intelligence is a fascinating journey of human innovation, marked by significant breakthroughs, periods of optimism and disappointment, and continuous evolution. Understanding this history provides valuable context for current developments and future possibilities.",
    sections: [
      {
        title: "Early Foundations (1940s-1950s)",
        content: [
          "The conceptual foundations of AI emerged in the 1940s and 1950s, with pioneering work in computer science and cognitive psychology. The Turing Test, proposed by Alan Turing in 1950, became an influential framework for measuring machine intelligence.",
          "The field of AI was officially born at the Dartmouth Conference in 1956, where leading researchers gathered to discuss the possibility of creating machines that could 'think.' This event marked the beginning of AI as a distinct academic discipline.",
          "Early AI research focused on general problem solving and symbolic reasoning, with programs that could prove mathematical theorems and play simple games. These early successes generated significant optimism about the future of AI.",
        ],
        hasQuiz: true,
      },
      {
        title: "The First AI Winter and Expert Systems (1970s-1980s)",
        content: [
          "The initial optimism of the 1960s gave way to the first 'AI winter' in the 1970s, as early approaches showed limitations and funding decreased. Researchers realized that many problems were more complex than initially thought.",
          "The 1980s saw the rise of expert systems, programs designed to solve complex problems by mimicking human expertise in specific domains. These systems found practical applications in medical diagnosis, chemical analysis, and other specialized fields.",
          "Despite their usefulness in specific areas, expert systems also showed limitations, particularly in their inability to learn from experience or handle unexpected situations. This led to a second AI winter in the late 1980s and early 1990s.",
        ],
        hasQuiz: true,
      },
      {
        title: "Machine Learning Revolution (1990s-2000s)",
        content: [
          "The 1990s marked a shift toward machine learning approaches, particularly neural networks and statistical methods. This shift was driven by increasing computational power and the availability of larger datasets.",
          "Major breakthroughs included the development of support vector machines, random forests, and improved neural network architectures. These advances enabled practical applications in speech recognition, computer vision, and natural language processing.",
          "The rise of the internet provided vast amounts of data for training AI systems, while improvements in hardware made it possible to process this data effectively.",
        ],
        hasQuiz: true,
      },
      {
        title: "Deep Learning Era (2010s-Present)",
        content: [
          "The current era of AI has been dominated by deep learning, beginning with breakthrough results in image recognition with AlexNet in 2012. This success demonstrated the power of deep neural networks trained on large datasets.",
          "Subsequent developments included transformative technologies like GANs (Generative Adversarial Networks) and transformer models, which have revolutionized natural language processing and other fields.",
          "Recent years have seen the emergence of increasingly powerful language models, autonomous systems, and AI applications across virtually every industry, marking a new chapter in the history of artificial intelligence.",
        ],
        hasQuiz: true,
      },
    ],
    topic: "history",
  },
};

export default function StudyTopicPage() {
  const { slug } = useParams();
  const content = STUDY_CONTENT[slug as keyof typeof STUDY_CONTENT];

  if (!content) {
    return <div>Topic not found</div>;
  }

  return (
    <StudyPageLayout
      title={content.title}
      introduction={content.introduction}
      sections={content.sections}
      topic={content.topic}
    />
  );
}
