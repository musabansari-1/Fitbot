// 1. Interface Definitions
interface Followup {
  triggers: string[];  // Keywords that trigger this follow-up
  response: string;
  emoji: string;
}

interface ResponseData {
  keywords: string[];
  response: string;
  emoji: string;
  followups: Followup[];
}

interface BotResponse {
  response: string;
  emoji: string;
}

// 2. COMPLETE Response Database (All Original Questions + New Follow-ups)
export const responses: ResponseData[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'start', 'greetings'],
    response: "Hey there, fitness warrior! 💪 I'm your personal gym assistant. I'm here to help you with workouts, nutrition, form tips, and anything fitness-related. What would you like to know?",
    emoji: "👋",
    followups: [
      {
        triggers: ['what', 'help', 'assist', 'can you do'],
        response: "I can help with workout plans, nutrition advice, exercise form tips, recovery strategies, and general fitness guidance. Where would you like to start?",
        emoji: "🤔"
      },
      {
        triggers: ['beginner', 'start', 'new', 'first time'],
        response: "Welcome to your fitness journey! Start with 2-3 days per week, focus on basic movements (squats, push-ups, rows), learn proper form first, then gradually increase intensity.",
        emoji: "🚀"
      }
    ]
  },
  {
    keywords: ['protein', 'how much protein', 'protein intake', 'daily protein'],
    response: "Great question! For muscle building, aim for 0.8-1.2g of protein per pound of body weight daily. Good sources include lean meats, fish, eggs, Greek yogurt, legumes, and protein powder. Spread it throughout the day for optimal absorption! 🥩",
    emoji: "🥩",
    followups: [
      {
        triggers: ['vegetarian', 'vegan', 'plant based'],
        response: "No problem! Great plant-based protein sources include tofu, tempeh, lentils, chickpeas, quinoa, and plant-based protein powders. Combine different sources to get all essential amino acids.",
        emoji: "🌱"
      },
      {
        triggers: ['time', 'when', 'timing', 'best time'],
        response: "While timing matters less than total daily intake, consuming protein within 2 hours post-workout can help with recovery. Also, spreading intake evenly across meals is better than one large dose.",
        emoji: "⏱️"
      }
    ]
  },
  {
    keywords: ['lose weight', 'weight loss', 'fat loss', 'burn fat', 'cutting'],
    response: "Weight loss comes down to being in a caloric deficit! Combine resistance training to preserve muscle, cardio for heart health, and a balanced diet. Aim for 1-2 lbs per week. Remember: consistency beats perfection! 🔥",
    emoji: "🔥",
    followups: [
      {
        triggers: ['calculate', 'calorie', 'calories', 'need'],
        response: "Start with your BMR (basal metabolic rate) and add activity level. A simple method: body weight (lbs) × 12-15 for moderate activity. Adjust based on progress. Apps like MyFitnessPal can help track!",
        emoji: "🧮"
      },
      {
        triggers: ['cardio', 'best cardio', 'running', 'hiit'],
        response: "Both HIIT and steady-state work! HIIT burns more calories in less time, while steady-state is easier to recover from. The best cardio is what you'll consistently do - choose activities you enjoy!",
        emoji: "❤️"
      }
    ]
  },
  {
    keywords: ['build muscle', 'gain muscle', 'muscle building', 'bulking', 'hypertrophy'],
    response: "To build muscle effectively: Progressive overload is key! Focus on compound movements, eat in a slight caloric surplus, get 7-9 hours of sleep, and be patient. Muscle growth takes time but the results are worth it! 💪",
    emoji: "💪",
    followups: [
      {
        triggers: ['how long', 'results', 'see progress'],
        response: "Beginners may see changes in 4-8 weeks, but significant muscle growth typically takes 3-6 months of consistent training. Take progress photos monthly - the scale doesn't tell the whole story!",
        emoji: "📅"
      },
      {
        triggers: ['best exercises', 'what exercises', 'recommend'],
        response: "Focus on compound lifts: squats, deadlifts, bench press, rows, overhead press, and pull-ups. These work multiple muscle groups simultaneously and allow for progressive overload.",
        emoji: "🏋️"
      }
    ]
  },
  {
    keywords: ['squat', 'squat form', 'how to squat'],
    response: "Perfect squat form: Feet shoulder-width apart, knees track over toes, chest up, core tight. Descend like sitting back into a chair, go to parallel or below, then drive through your heels. Start with bodyweight! 🦵",
    emoji: "🦵",
    followups: [
      {
        triggers: ['deep', 'depth', 'how low'],
        response: "Aim for at least parallel (hips at knee level), but depth depends on mobility. With practice, many can squat deeper safely. Never sacrifice form for depth - mobility work can help improve range.",
        emoji: "⬇️"
      },
      {
        triggers: ['knee', 'pain', 'hurt'],
        response: "Knee pain often comes from improper form: knees caving in, going too heavy too soon, or limited mobility. Try reducing weight, focusing on form, and warming up properly. If pain persists, consult a professional.",
        emoji: "⚠️"
      }
    ]
  },
  {
    keywords: ['deadlift', 'deadlift form', 'how to deadlift'],
    response: "Deadlift basics: Feet hip-width apart, bar over mid-foot, straight back, chest up. Hinge at hips, grab bar just outside legs, drive through heels and squeeze glutes at top. Start light and focus on form! 🏋️‍♂️",
    emoji: "🏋️‍♂️",
    followups: [
      {
        triggers: ['conventional', 'sumo', 'which'],
        response: "Conventional works more posterior chain, sumo is easier on the lower back and uses more quads. Try both and see what feels better for your body. Both are valid variations!",
        emoji: "🔄"
      },
      {
        triggers: ['how often', 'frequency'],
        response: "1-2 times per week max, as it's very taxing on the CNS. Beginners can start with once weekly. Always allow at least 48 hours recovery before training the same muscles again.",
        emoji: "🔄"
      }
    ]
  },
  {
    keywords: ['bench press', 'bench form', 'chest workout'],
    response: "Bench press technique: Lie flat, feet firmly planted, arch your back slightly, grip bar just wider than shoulders. Lower with control to chest, press up explosively. Always use a spotter for safety! 💥",
    emoji: "💥",
    followups: [
      {
        triggers: ['increase', 'improve', 'get stronger'],
        response: "Try increasing frequency (2x/week), incorporate variations (incline, pause reps), strengthen supporting muscles (triceps, shoulders), and ensure you're eating enough for recovery and growth.",
        emoji: "📈"
      },
      {
        triggers: ['shoulder', 'pain', 'hurt'],
        response: "Shoulder pain often comes from poor form: flaring elbows too much, going too heavy, or lack of scapular retraction. Try tucking elbows 45°, retracting shoulders, and reducing weight to perfect form.",
        emoji: "⚠️"
      }
    ]
  },
  {
    keywords: ['pre workout', 'before workout', 'pre-workout meal'],
    response: "Pre-workout fuel: 30-60 minutes before, have easily digestible carbs + some protein. Try banana with peanut butter, oatmeal with berries, or Greek yogurt with honey. Stay hydrated! 🍌",
    emoji: "🍌",
    followups: [
      {
        triggers: ['supplements', 'pre-workout'],
        response: "Caffeine (100-300mg) can help performance. Other common ingredients: beta-alanine (tingles), citrulline (pumps), creatine (long-term). Start with half dose to assess tolerance. Food first, supplements second!",
        emoji: "💊"
      },
      {
        triggers: ['how long', 'wait', 'after eating'],
        response: "Depends on meal size: small snack (30 min), medium meal (1-2 hours), large meal (2-3 hours). Listen to your body - you want energy without feeling stuffed or sluggish.",
        emoji: "⏱️"
      }
    ]
  },
  {
    keywords: ['post workout', 'after workout', 'post-workout meal', 'recovery'],
    response: "Post-workout recovery: Within 30-60 minutes, combine protein and carbs to refuel muscles. Chocolate milk, protein shake with banana, or chicken with rice work great. Don't forget to hydrate! 🥛",
    emoji: "🥛",
    followups: [
      {
        triggers: ['anabolic window', 'how soon', 'timing'],
        response: "While immediate post-workout nutrition helps, the 'window' is larger than once thought (up to 2 hours). Total daily nutrition matters more than exact timing, but eating soon after training is still beneficial.",
        emoji: "🕰️"
      },
      {
        triggers: ['supplements', 'post-workout'],
        response: "Protein powder is convenient, creatine helps with recovery, and electrolytes replace what you sweat out. But whole foods work just as well - supplements are optional, not mandatory!",
        emoji: "💊"
      }
    ]
  },
  {
    keywords: ['rest day', 'recovery day', 'how often rest'],
    response: "Rest days are crucial! Your muscles grow during recovery, not just during workouts. Take 1-2 full rest days per week, or do light activities like walking or yoga. Listen to your body! 😴",
    emoji: "😴",
    followups: [
      {
        triggers: ['what to do', 'activities', 'active'],
        response: "Active recovery (walking, light yoga), mobility work, stretching, or complete rest. Keep movement light - the goal is to promote recovery, not create more fatigue.",
        emoji: "🚶"
      },
      {
        triggers: ['how know', 'need more', 'overtraining'],
        response: "Signs you need more recovery: persistent soreness, performance decline, fatigue, irritability, or trouble sleeping. When in doubt, take an extra day - it won't hurt your progress!",
        emoji: "⚠️"
      }
    ]
  },
  {
    keywords: ['beginner', 'start working out', 'new to gym', 'first time'],
    response: "Welcome to your fitness journey! Start with 2-3 days per week, focus on basic movements (squats, push-ups, rows), learn proper form first, then gradually increase intensity. You've got this! 🌟",
    emoji: "🌟",
    followups: [
      {
        triggers: ['workout', 'routine', 'plan'],
        response: "Try full-body workouts 3x/week: Squats, push-ups, rows, planks, and bodyweight exercises. 2-3 sets of 8-12 reps per exercise. Focus on form before adding weight or complexity.",
        emoji: "📝"
      },
      {
        triggers: ['how long', 'duration'],
        response: "30-45 minutes is plenty when starting out. Quality over quantity! As you build endurance, you can gradually increase duration to 60 minutes max. Rest 1-2 minutes between sets.",
        emoji: "⏱️"
      }
    ]
  },
  {
    keywords: ['cardio', 'running', 'treadmill', 'heart rate'],
    response: "Cardio is great for heart health! Mix it up: HIIT for fat burning, steady-state for endurance. Aim for 150 minutes moderate or 75 minutes vigorous per week. Find activities you enjoy! 🏃‍♂️",
    emoji: "🏃‍♂️",
    followups: [
      {
        triggers: ['before', 'after', 'weights'],
        response: "Generally after weights, so you have energy for resistance training. If doing both in one session, keep cardio light (10-15 min) if before, or save intense cardio for separate days.",
        emoji: "🔄"
      },
      {
        triggers: ['heart rate', 'target', 'zone'],
        response: "Moderate intensity: 50-70% of max HR (220 - age). Vigorous: 70-85%. For fat burning, stay in moderate zone. For cardiovascular improvement, include some higher intensity intervals.",
        emoji: "❤️"
      }
    ]
  },
  {
    keywords: ['water', 'hydration', 'how much water'],
    response: "Stay hydrated! Aim for at least 8 glasses (64oz) daily, more if you're active. During workouts, sip regularly. Good hydration improves performance and recovery. Your body will thank you! 💧",
    emoji: "💧",
    followups: [
      {
        triggers: ['dehydrated', 'signs', 'tell'],
        response: "Signs: dark urine, thirst, fatigue, headaches. Aim for pale yellow urine. Weigh yourself before/after workouts - drink 16-24oz for every pound lost during exercise.",
        emoji: "⚠️"
      },
      {
        triggers: ['sports drinks', 'electrolytes', 'gatorade'],
        response: "Only for intense exercise >60-90 minutes. For most workouts, water is fine. If sweating heavily, add electrolytes. Sports drinks often have unnecessary sugar for casual exercisers.",
        emoji: "🏈"
      }
    ]
  },
  {
    keywords: ['sleep', 'recovery sleep', 'how much sleep'],
    response: "Sleep is your secret weapon! Aim for 7-9 hours nightly. During deep sleep, your body releases growth hormone and repairs muscle tissue. Poor sleep = poor gains. Prioritize it! 😴",
    emoji: "🛌",
    followups: [
      {
        triggers: ['improve', 'quality', 'better'],
        response: "Create a routine: consistent bedtime, limit screens before bed, keep room cool/dark, avoid caffeine late, and consider magnesium or chamomile tea. Your fitness progress depends on quality rest!",
        emoji: "✨"
      },
      {
        triggers: ['napping', 'nap', 'siesta'],
        response: "Short naps (20-30 min) can help, but don't replace nighttime sleep. Best if you can't get enough at night. Avoid long/late naps that might disrupt your regular sleep schedule.",
        emoji: "😴"
      }
    ]
  },
  {
    keywords: ['motivation', 'stay motivated', 'consistency'],
    response: "Motivation gets you started, but habits keep you going! Set small, achievable goals, track your progress, find a workout buddy, and remember why you started. Some days will be tough - that's normal! 🎯",
    emoji: "🎯",
    followups: [
      {
        triggers: ['back on track', 'missed', 'skipped'],
        response: "Don't beat yourself up! Just restart - maybe with a lighter workout. One missed workout won't ruin progress, but letting it become a habit might. Focus on today, not yesterday.",
        emoji: "🔄"
      },
      {
        triggers: ['habit', 'how long', 'routine'],
        response: "Research suggests 2-3 months of consistent behavior forms a habit. Start small (2-3 workouts/week), schedule them like appointments, and celebrate small wins along the way!",
        emoji: "📅"
      }
    ]
  }
];

// 3. Conversation State Management
interface ConversationState {
  lastTopic: string;
}

let conversationState: ConversationState = {
  lastTopic: ""
};

// 4. Enhanced Response Finder
export function findResponse(userInput: string): BotResponse {
  const lowerInput = userInput.toLowerCase().trim();
  let bestMatch: {
    score: number;
    response: BotResponse | null;
    isFollowup: boolean;
  } = { score: 0, response: null, isFollowup: false };

  // First check for follow-ups if we have a last topic
  if (conversationState.lastTopic) {
    const lastResponse = responses.find(r => 
      r.keywords.some(k => conversationState.lastTopic.includes(k))
    );
    
    if (lastResponse) {
      for (const followup of lastResponse.followups) {
        const score = followup.triggers.filter(t => lowerInput.includes(t)).length;
        if (score > bestMatch.score) {
          bestMatch = {
            score,
            response: {
              response: followup.response,
              emoji: followup.emoji
            },
            isFollowup: true
          };
        }
      }
    }
  }

  // If no follow-up matched, check main responses
  if (bestMatch.score === 0) {
    for (const response of responses) {
      const score = response.keywords.filter(k => lowerInput.includes(k)).length;
      if (score > bestMatch.score) {
        bestMatch = {
          score,
          response: {
            response: response.response,
            emoji: response.emoji
          },
          isFollowup: false
        };
        conversationState.lastTopic = response.keywords[0]; // Store main topic
      }
    }
  }

  // Return the best match found or default response
  return bestMatch.response ?? {
    response: "That's a great question! Could you ask about workouts, nutrition, or fitness tips?",
    emoji: "🤔"
  };
}


// // 1. Interface Definitions
// interface Followup {
//   triggers: string[];
//   response: string;
//   emoji: string;
// }

// interface ResponseData {
//   keywords: string[];
//   response: string;
//   emoji: string;
//   followups: Followup[];
// }

// interface BotResponse {
//   response: string;
//   emoji: string;
// }

// // 2. COMPREHENSIVE Response Database
// export const responses: ResponseData[] = [
//   // ==================== CORE RESPONSES (Existing) ====================
//   {
//     keywords: ['hello', 'hi', 'hey', 'start', 'greetings'],
//     response: "Hey there, fitness warrior! 💪 I'm your personal gym assistant. What would you like to know?",
//     emoji: "👋",
//     followups: [
//       {
//         triggers: ['what', 'help', 'assist'],
//         response: "I can help with workout plans, nutrition advice, exercise form tips, and general fitness guidance. Where would you like to start?",
//         emoji: "🤔"
//       },
//       {
//         triggers: ['beginner', 'new', 'first time'],
//         response: "For beginners, I recommend starting with 2-3 full-body workouts per week focusing on basic movements like squats and push-ups.",
//         emoji: "🚀"
//       }
//     ]
//   },
//   {
//     keywords: ['protein', 'how much protein'],
//     response: "Aim for 0.8-1.2g of protein per pound of body weight daily from sources like chicken, fish, eggs, and legumes.",
//     emoji: "🥩",
//     followups: [
//       {
//         triggers: ['vegetarian', 'vegan'],
//         response: "Great plant-based proteins: tofu, tempeh, lentils, chickpeas, quinoa, and plant-based protein powders.",
//         emoji: "🌱"
//       },
//       {
//         triggers: ['timing', 'when'],
//         response: "Spread protein throughout the day. Post-workout (within 2 hours) is especially important for recovery.",
//         emoji: "⏱️"
//       }
//     ]
//   },

//   // ==================== NEW VERSATILE CONTENT ====================
//   {
//     keywords: ['injury', 'rehab', 'pain'],
//     response: "For injury management:\n• Stop painful movements\n• Apply RICE method\n• Do pain-free mobility drills\n• Consult a physical therapist",
//     emoji: "🩹",
//     followups: [
//       {
//         triggers: ['back', 'spine'],
//         response: "Back injury care:\n• Avoid heavy lifting\n• Try cat-cow stretches\n• Build core stability\n• Consider McKenzie exercises",
//         emoji: "⚠️"
//       },
//       {
//         triggers: ['knee', 'joint'],
//         response: "Knee rehab:\n• Quad sets\n• Straight leg raises\n• Step-ups\n• Avoid deep squats initially",
//         emoji: "🦵"
//       }
//     ]
//   },
//   {
//     keywords: ['travel', 'vacation'],
//     response: "Travel workout solutions:\n• Bodyweight circuits\n• Resistance bands\n• Hotel room workouts\n• Walking tours\n• Stair climbing",
//     emoji: "✈️",
//     followups: [
//       {
//         triggers: ['no equipment'],
//         response: "No-equipment routine:\n• Push-up variations\n• Squats\n• Planks\n• Lunges\n• Burpees\n• Wall sits",
//         emoji: "🏋️"
//       },
//       {
//         triggers: ['hotel gym'],
//         response: "Hotel gym hacks:\n• Dumbbell complexes\n• Treadmill inclines\n• Cable machine circuits\n• Pool workouts",
//         emoji: "🏨"
//       }
//     ]
//   },
//   {
//     keywords: ['period', 'menstrual'],
//     response: "Cycle-synced training:\n• Follicular phase: Higher intensity\n• Luteal phase: Lower intensity\n• Menstruation: Gentle movement\n• Adjust nutrition accordingly",
//     emoji: "🌸",
//     followups: [
//       {
//         triggers: ['cramps'],
//         response: "For cramps:\n• Light yoga\n• Walking\n• Heat therapy\n• Magnesium\n• Hydration",
//         emoji: "🔥"
//       },
//       {
//         triggers: ['energy'],
//         response: "Combat fatigue:\n• Iron-rich foods\n• Complex carbs\n• Extra rest\n• Reduce caffeine",
//         emoji: "⚡"
//       }
//     ]
//   },
//   {
//     keywords: ['home', 'home workout'],
//     response: "Effective home workouts:\n• Bodyweight circuits\n• Resistance bands\n• Furniture-assisted exercises\n• Online workout videos\n• Outdoor activities",
//     emoji: "🏠",
//     followups: [
//       {
//         triggers: ['no equipment'],
//         response: "No-equipment exercises:\n• Push-up variations\n• Squats\n• Planks\n• Lunges\n• Burpees\n• Wall sits",
//         emoji: "🔄"
//       },
//       {
//         triggers: ['small space'],
//         response: "Small space solutions:\n• Isometric holds\n• Shadow boxing\n• Yoga flows\n• Seated exercises\n• Micro-workouts",
//         emoji: "📏"
//       }
//     ]
//   },

//   // ==================== EXISTING CORE CONTENT ====================
//   {
//     keywords: ['lose weight', 'fat loss'],
//     response: "Weight loss fundamentals:\n• Calorie deficit\n• Strength training\n• Cardio\n• High-protein diet\n• Consistency",
//     emoji: "🔥",
//     followups: [
//       {
//         triggers: ['plateau', 'stuck'],
//         response: "Break plateaus with:\n• Calorie/macro adjustment\n• New exercises\n• Increased activity\n• More sleep\n• Stress management",
//         emoji: "📉"
//       }
//     ]
//   },
//   {
//     keywords: ['build muscle', 'hypertrophy'],
//     response: "Muscle building essentials:\n• Progressive overload\n• Compound lifts\n• Calorie surplus\n• Protein intake\n• Recovery",
//     emoji: "💪",
//     followups: [
//       {
//         triggers: ['routine', 'split'],
//         response: "Effective splits:\n• Push/Pull/Legs\n• Upper/Lower\n• Full Body\n• Bro Split\n• Choose based on schedule",
//         emoji: "📝"
//       }
//     ]
//   }
// ];

// // 3. Conversation State Management
// interface ConversationState {
//   lastTopic: string;
// }

// let conversationState: ConversationState = {
//   lastTopic: ""
// };

// // 4. Enhanced Response Finder
// export function findResponse(userInput: string): BotResponse {
//   const lowerInput = userInput.toLowerCase().trim();
//   let bestMatch = { score: 0, response: null as BotResponse | null, isFollowup: false };

//   // First check for follow-ups if we have context
//   if (conversationState.lastTopic) {
//     const lastResponse = responses.find(r => 
//       r.keywords.some(k => conversationState.lastTopic.includes(k))
//     );
    
//     if (lastResponse) {
//       for (const followup of lastResponse.followups) {
//         const score = followup.triggers.filter(t => lowerInput.includes(t)).length;
//         if (score > bestMatch.score) {
//           bestMatch = {
//             score,
//             response: {
//               response: followup.response,
//               emoji: followup.emoji
//             },
//             isFollowup: true
//           };
//         }
//       }
//     }
//   }

//   // If no follow-up matched, check main responses
//   if (bestMatch.score === 0) {
//     for (const response of responses) {
//       const score = response.keywords.filter(k => lowerInput.includes(k)).length;
//       if (score > bestMatch.score) {
//         bestMatch = {
//           score,
//           response: {
//             response: response.response,
//             emoji: response.emoji
//           },
//           isFollowup: false
//         };
//         conversationState.lastTopic = response.keywords[0];
//       }
//     }
//   }

//   return bestMatch.response || {
//     response: "That's an interesting question! Try asking about workouts, nutrition, or fitness tips.",
//     emoji: "🤔"
//   };
// }