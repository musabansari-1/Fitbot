interface ResponseData {
  keywords: string[];
  response: string;
  emoji: string;
  related?: string[];
  followUps?: { // New field for suggested follow-up questions
    question: string;
    keywords: string[];
  }[];
}

export const responses: ResponseData[] = [
  // Greetings
  {
    keywords: ['hello', 'hi', 'hey', 'start', 'greetings', 'wassup', 'yo'],
    response: "Hey there, fitness warrior! 💪 I'm your personal gym assistant. I'm here to help you with workouts, nutrition, form tips, and anything fitness-related. What would you like to know?",
    emoji: "👋",
    related: ['beginner', 'motivation', 'workout plan'],
    followUps: [
      {
        question: "How much protein should I eat?",
        keywords: ['protein']
      },
      {
        question: "What's a good beginner workout?",
        keywords: ['beginner']
      },
      {
        question: "How can I stay motivated?",
        keywords: ['motivation']
      }
    ]
  },

  // Protein and Nutrition
  {
    keywords: ['protein', 'how much protein', 'protein intake', 'daily protein', 'protein needs'],
    response: "Great question! For muscle building, aim for 0.8-1.2g of protein per pound of body weight daily. Good sources include:\n\n- Animal: Chicken, turkey, lean beef, fish, eggs, Greek yogurt\n- Plant: Tofu, tempeh, lentils, chickpeas, quinoa\n- Supplements: Whey, casein, pea protein\n\nSpread intake throughout the day for optimal absorption! 🥩",
    emoji: "🥩",
    related: ['vegetarian protein', 'post workout', 'bulking', 'cutting'],
    followUps: [
      {
        question: "What if I'm vegetarian?",
        keywords: ['vegetarian protein']
      },
      {
        question: "When should I eat protein around workouts?",
        keywords: ['post workout']
      },
      {
        question: "Does this change if I'm trying to lose weight?",
        keywords: ['cutting']
      }
    ]
  },
  {
    keywords: ['vegetarian protein', 'vegan protein', 'plant protein'],
    response: "Excellent plant-based protein options:\n\n- Complete proteins: Quinoa, buckwheat, hemp seeds, soy (tofu, tempeh)\n- Combos: Rice + beans, hummus + pita, peanut butter on whole grain\n- High-protein veggies: Lentils, chickpeas, black beans, edamame\n\nAim for variety to get all essential amino acids! 🌱",
    emoji: "🌱",
    related: ['protein', 'nutrition', 'meal planning'],
    followUps: [
      {
        question: "How do these compare to animal proteins?",
        keywords: ['protein']
      },
      {
        question: "What about protein supplements for vegetarians?",
        keywords: ['supplements']
      }
    ]
  },

  // Weight Loss
  {
    keywords: ['lose weight', 'weight loss', 'fat loss', 'burn fat', 'cutting', 'slim down'],
    response: "Sustainable weight loss requires a multi-approach strategy:\n\n1️⃣ Nutrition: 300-500 calorie deficit, high protein, whole foods\n2️⃣ Training: Strength training 3-4x/week + cardio/HIIT 2-3x\n3️⃣ Recovery: 7-9 hours sleep, stress management\n4️⃣ Consistency: Aim for 1-2 lbs loss per week\n\nRemember: You can't out-train a bad diet! 🔥",
    emoji: "🔥",
    related: ['metabolism', 'plateau', 'meal planning', 'cardio'],
    followUps: [
      {
        question: "How do I calculate my calorie needs?",
        keywords: ['calorie calculator']
      },
      {
        question: "What if I stop losing weight?",
        keywords: ['plateau']
      },
      {
        question: "Is cardio or weights better for fat loss?",
        keywords: ['cardio vs weights']
      }
    ]
  },

  // Muscle Building
  {
    keywords: ['build muscle', 'gain muscle', 'muscle building', 'bulking', 'hypertrophy', 'get bigger'],
    response: "Muscle growth fundamentals:\n\n🏋️ Progressive Overload: Gradually increase weight/reps\n🍗 Nutrition: 300-500 calorie surplus, 1g protein/lb\n💤 Recovery: 7-9 hours sleep, rest days\n📊 Programming: 3-6x/week, compound movements first\n⏳ Patience: 0.5-1 lb muscle gain per month (natural)\n\nTrack workouts and adjust every 4-6 weeks! 💪",
    emoji: "💪",
    related: ['protein', 'workout plan', 'supplements', 'rest days'],
    followUps: [
      {
        question: "What's the best workout split for muscle growth?",
        keywords: ['workout plan']
      },
      {
        question: "Do I need supplements to build muscle?",
        keywords: ['supplements']
      },
      {
        question: "How important is sleep for muscle growth?",
        keywords: ['sleep']
      }
    ]
  },

  // Exercises and Form
  {
    keywords: ['squat', 'squat form', 'how to squat', 'back squat', 'squatting'],
    response: "Perfecting your squat:\n\n🔧 Setup: Bar on traps/rear delts, grip slightly wider than shoulders\n🦶 Stance: Feet shoulder-width, toes slightly out\n⬇️ Descent: Break at hips first, knees track toes, descend to parallel or below\n⬆️ Ascent: Drive through heels, squeeze glutes at top\n\nCommon mistakes:\n- Knees caving in\n- Heels lifting\n- Excessive forward lean\n- Not hitting depth\n\nStart light, film yourself, and progress gradually! 🦵",
    emoji: "🦵",
    related: ['leg workout', 'form check', 'progressive overload'],
    followUps: [
      {
        question: "How do I fix knee pain during squats?",
        keywords: ['knee pain']
      },
      {
        question: "What's the difference between high bar and low bar squats?",
        keywords: ['high bar squat']
      },
      {
        question: "How often should I squat per week?",
        keywords: ['squat frequency']
      }
    ]
  },

  // Workout Planning
  {
    keywords: ['workout plan', 'routine', 'program', 'training split'],
    response: "Effective workout splits:\n\n💪 Beginner (Full Body): 3x/week, compound movements\n⚖️ Intermediate (Upper/Lower): 4x/week, more isolation work\n🏆 Advanced (Push/Pull/Legs): 5-6x/week, higher volume\n\nKey principles:\n- Progressive overload\n- 48-72 hours between working same muscles\n- Balance push/pull movements\n- Include both compound and isolation exercises\n\nConsistency with any good program beats hopping between plans! 📊",
    emoji: "📊",
    related: ['progressive overload', 'rest days', 'volume'],
    followUps: [
      {
        question: "How do I progress in my workouts?",
        keywords: ['progressive overload']
      },
      {
        question: "How many rest days should I take?",
        keywords: ['rest days']
      },
      {
        question: "What's the ideal workout volume?",
        keywords: ['volume']
      }
    ]
  },

  // Default Response
  {
    keywords: [],
    response: "That's a great fitness-related question! While I specialize in workouts, nutrition, and exercise science, I might need more specifics to give the best answer. Could you rephrase or ask about:\n\n- Specific exercises or form tips\n- Nutrition for your goals\n- Workout programming\n- Recovery strategies\n\nI'm here to help you reach your fitness goals! 💪",
    emoji: "🤔",
    followUps: [
      {
        question: "How much protein should I eat?",
        keywords: ['protein']
      },
      {
        question: "What's a good beginner workout?",
        keywords: ['beginner']
      },
      {
        question: "How can I lose belly fat?",
        keywords: ['fat loss']
      }
    ]
  }
];

export function findResponse(input: string): { response: string; emoji: string; followUps?: { question: string; keywords: string[] }[] } {
  const lowerInput = input.toLowerCase();
  
  // First try exact matches
  for (const responseData of responses) {
    if (responseData.keywords.some(keyword => 
      lowerInput.split(/\s+/).includes(keyword.toLowerCase())
    )) {
      return {
        response: responseData.response,
        emoji: responseData.emoji,
        followUps: responseData.followUps
      };
    }
  }
  
  // Then try partial matches
  for (const responseData of responses) {
    if (responseData.keywords.some(keyword => 
      lowerInput.includes(keyword.toLowerCase())
    )) {
      return {
        response: responseData.response,
        emoji: responseData.emoji,
        followUps: responseData.followUps
      };
    }
  }
  
  // Default response
  return {
    response: responses[responses.length - 1].response,
    emoji: responses[responses.length - 1].emoji,
    followUps: responses[responses.length - 1].followUps
  };
}