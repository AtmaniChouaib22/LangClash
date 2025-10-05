import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding database with questions...");

  // Spanish vocabulary questions
  const spanishQuestions = [
    {
      text: "What is 'hello' in Spanish?",
      options: ["Hola", "Bonjour", "Guten Tag", "Ciao"],
      correctAnswerIdx: 0,
      difficulty: "easy",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Hola' is the most common way to say hello in Spanish.",
    },
    {
      text: "What does 'gracias' mean in English?",
      options: ["Please", "Thank you", "Excuse me", "You're welcome"],
      correctAnswerIdx: 1,
      difficulty: "easy",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Gracias' means 'thank you' in Spanish.",
    },
    {
      text: "How do you say 'goodbye' in Spanish?",
      options: ["Hola", "Por favor", "Adiós", "De nada"],
      correctAnswerIdx: 2,
      difficulty: "easy",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Adiós' is the standard way to say goodbye in Spanish.",
    },
    {
      text: "What is the Spanish word for 'water'?",
      options: ["Leche", "Agua", "Café", "Jugo"],
      correctAnswerIdx: 1,
      difficulty: "easy",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Agua' means water in Spanish.",
    },
    {
      text: "How do you say 'please' in Spanish?",
      options: ["Gracias", "De nada", "Por favor", "Perdón"],
      correctAnswerIdx: 2,
      difficulty: "easy",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Por favor' means please in Spanish.",
    },
    {
      text: "What does 'casa' mean in English?",
      options: ["Car", "House", "Dog", "Food"],
      correctAnswerIdx: 1,
      difficulty: "easy",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Casa' means house in Spanish.",
    },
    {
      text: "How do you say 'yes' in Spanish?",
      options: ["No", "Sí", "Tal vez", "Nunca"],
      correctAnswerIdx: 1,
      difficulty: "easy",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Sí' means yes in Spanish.",
    },
    {
      text: "What is the Spanish word for 'cat'?",
      options: ["Perro", "Gato", "Pájaro", "Pez"],
      correctAnswerIdx: 1,
      difficulty: "easy",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Gato' means cat in Spanish.",
    },
    {
      text: "How do you say 'good morning' in Spanish?",
      options: ["Buenas noches", "Buenas tardes", "Buenos días", "Hasta luego"],
      correctAnswerIdx: 2,
      difficulty: "easy",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Buenos días' means good morning in Spanish.",
    },
    {
      text: "What does 'familia' mean in English?",
      options: ["Friend", "Family", "Work", "School"],
      correctAnswerIdx: 1,
      difficulty: "easy",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Familia' means family in Spanish.",
    },
  ];

  // Medium difficulty questions
  const mediumQuestions = [
    {
      text: "Which is the correct conjugation of 'hablar' (to speak) for 'I speak'?",
      options: ["Hablas", "Habla", "Hablo", "Hablan"],
      correctAnswerIdx: 2,
      difficulty: "medium",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation: "'Hablo' is the first person singular form of 'hablar'.",
    },
    {
      text: "What is the plural form of 'el libro' (the book)?",
      options: ["Los libro", "Las libros", "Los libros", "La libros"],
      correctAnswerIdx: 2,
      difficulty: "medium",
      category: "spanish",
      language: "en",
      targetLanguage: "es",
      explanation:
        "'Los libros' is the correct plural form using masculine article 'los'.",
    },
  ];

  // Insert all questions
  const allQuestions = [...spanishQuestions, ...mediumQuestions];

  for (const question of allQuestions) {
    await prisma.question.create({
      data: question,
    });
  }

  console.log(`✅ Created ${allQuestions.length} questions`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
