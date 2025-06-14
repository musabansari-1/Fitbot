interface ResponseData {
  keywords: string[];
  response: string;
  emoji: string;
}

export const responses: ResponseData[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'start', 'greetings'],
    response: "Hey there, fitness warrior! 💪 I'm your personal gym assistant. I'm here to help you with workouts, nutrition, form tips, and anything fitness-related. What would you like to know?",
    emoji: "👋"
  },
  {
    keywords: ['protein', 'how much protein', 'protein intake', 'daily protein'],
    response: "Great question! For muscle building, aim for 0.8-1.2g of protein per pound of body weight daily. Good sources include lean meats, fish, eggs, Greek yogurt, legumes, and protein powder. Spread it throughout the day for optimal absorption! 🥩",
    emoji: "🥩"
  },
  {
    keywords: ['lose weight', 'weight loss', 'fat loss', 'burn fat', 'cutting'],
    response: "Weight loss comes down to being in a caloric deficit! Combine resistance training to preserve muscle, cardio for heart health, and a balanced diet. Aim for 1-2 lbs per week. Remember: consistency beats perfection! 🔥",
    emoji: "🔥"
  },
  {
    keywords: ['build muscle', 'gain muscle', 'muscle building', 'bulking', 'hypertrophy'],
    response: "To build muscle effectively: Progressive overload is key! Focus on compound movements, eat in a slight caloric surplus, get 7-9 hours of sleep, and be patient. Muscle growth takes time but the results are worth it! 💪",
    emoji: "💪"
  },
  {
    keywords: ['squat', 'squat form', 'how to squat'],
    response: "Perfect squat form: Feet shoulder-width apart, knees track over toes, chest up, core tight. Descend like sitting back into a chair, go to parallel or below, then drive through your heels. Start with bodyweight! 🦵",
    emoji: "🦵"
  },
  {
    keywords: ['deadlift', 'deadlift form', 'how to deadlift'],
    response: "Deadlift basics: Feet hip-width apart, bar over mid-foot, straight back, chest up. Hinge at hips, grab bar just outside legs, drive through heels and squeeze glutes at top. Start light and focus on form! 🏋️‍♂️",
    emoji: "🏋️‍♂️"
  },
  {
    keywords: ['bench press', 'bench form', 'chest workout'],
    response: "Bench press technique: Lie flat, feet firmly planted, arch your back slightly, grip bar just wider than shoulders. Lower with control to chest, press up explosively. Always use a spotter for safety! 💥",
    emoji: "💥"
  },
  {
    keywords: ['pre workout', 'before workout', 'pre-workout meal'],
    response: "Pre-workout fuel: 30-60 minutes before, have easily digestible carbs + some protein. Try banana with peanut butter, oatmeal with berries, or Greek yogurt with honey. Stay hydrated! 🍌",
    emoji: "🍌"
  },
  {
    keywords: ['post workout', 'after workout', 'post-workout meal', 'recovery'],
    response: "Post-workout recovery: Within 30-60 minutes, combine protein and carbs to refuel muscles. Chocolate milk, protein shake with banana, or chicken with rice work great. Don't forget to hydrate! 🥛",
    emoji: "🥛"
  },
  {
    keywords: ['rest day', 'recovery day', 'how often rest'],
    response: "Rest days are crucial! Your muscles grow during recovery, not just during workouts. Take 1-2 full rest days per week, or do light activities like walking or yoga. Listen to your body! 😴",
    emoji: "😴"
  },
  {
    keywords: ['beginner', 'start working out', 'new to gym', 'first time'],
    response: "Welcome to your fitness journey! Start with 2-3 days per week, focus on basic movements (squats, push-ups, rows), learn proper form first, then gradually increase intensity. You've got this! 🌟",
    emoji: "🌟"
  },
  {
    keywords: ['cardio', 'running', 'treadmill', 'heart rate'],
    response: "Cardio is great for heart health! Mix it up: HIIT for fat burning, steady-state for endurance. Aim for 150 minutes moderate or 75 minutes vigorous per week. Find activities you enjoy! 🏃‍♂️",
    emoji: "🏃‍♂️"
  },
  {
    keywords: ['water', 'hydration', 'how much water'],
    response: "Stay hydrated! Aim for at least 8 glasses (64oz) daily, more if you're active. During workouts, sip regularly. Good hydration improves performance and recovery. Your body will thank you! 💧",
    emoji: "💧"
  },
  {
    keywords: ['sleep', 'recovery sleep', 'how much sleep'],
    response: "Sleep is your secret weapon! Aim for 7-9 hours nightly. During deep sleep, your body releases growth hormone and repairs muscle tissue. Poor sleep = poor gains. Prioritize it! 😴",
    emoji: "🛌"
  },
  {
    keywords: ['motivation', 'stay motivated', 'consistency'],
    response: "Motivation gets you started, but habits keep you going! Set small, achievable goals, track your progress, find a workout buddy, and remember why you started. Some days will be tough - that's normal! 🎯",
    emoji: "🎯"
  }
];

export function findResponse(input: string): { response: string; emoji: string } {
  const lowerInput = input.toLowerCase();
  
  for (const responseData of responses) {
    if (responseData.keywords.some(keyword => lowerInput.includes(keyword))) {
      return {
        response: responseData.response,
        emoji: responseData.emoji
      };
    }
  }
  
  // Default response
  return {
    response: "That's a great question! While I specialize in fitness, nutrition, and exercise advice, I might not have the perfect answer for that specific topic. Try asking about workouts, nutrition, form tips, or general fitness guidance - I'm here to help! 💪",
    emoji: "🤔"
  };
}
