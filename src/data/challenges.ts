export type ChallengeCategory =
  | 'Random Topic'
  | 'Sell Me This'
  | 'Would You Rather'
  | '3 Random Words'
  | 'Continue the Story'
  | 'Forbidden Words'
  | 'Describe an Image'
  | 'Story Starter'
  | "Explain Like I'm Five"
  | 'Rapid Fire';

export interface Challenge {
  id: string;
  category: ChallengeCategory;
  title: string;
  prompt: string;
  items?: string[];
  imageUrl?: string;
}

export const CHALLENGES: Challenge[] = [
  // 1. Random Topic
  {
    id: 'ch-rt-1',
    category: 'Random Topic',
    title: 'Artificial Intelligence in Everyday Life',
    prompt: 'Speak about this topic for one minute. Share your thoughts, observations, or future predictions.'
  },
  {
    id: 'ch-rt-2',
    category: 'Random Topic',
    title: 'The Art of Time Management',
    prompt: 'Speak about this topic for one minute. Share practical strategies or personal experiences.'
  },
  {
    id: 'ch-rt-3',
    category: 'Random Topic',
    title: 'Why Traveling Changes Your Perspective',
    prompt: 'Speak about this topic for one minute. Focus on cultural discovery and personal growth.'
  },
  {
    id: 'ch-rt-4',
    category: 'Random Topic',
    title: 'Space Exploration in the Next Decade',
    prompt: 'Speak about this topic for one minute. Discuss the possibilities of human space colonization.'
  },
  {
    id: 'ch-rt-5',
    category: 'Random Topic',
    title: 'The Impact of Social Media on Real Friendships',
    prompt: 'Speak about this topic for one minute. Analyze how screen time affects genuine human connection.'
  },
  {
    id: 'ch-rt-6',
    category: 'Random Topic',
    title: 'Minimalism and the Pursuit of Happiness',
    prompt: 'Speak about this topic for one minute. Discuss whether owning less leads to greater clarity and joy.'
  },

  // 2. Sell Me This
  {
    id: 'ch-smt-1',
    category: 'Sell Me This',
    title: 'A Brick',
    prompt: 'Convince someone to buy a brick in only one minute. Pitch its hidden value and versatility!'
  },
  {
    id: 'ch-smt-2',
    category: 'Sell Me This',
    title: 'A Broken Umbrella',
    prompt: 'Pitch this broken umbrella as a revolutionary life-saving luxury accessory in under 60 seconds.'
  },
  {
    id: 'ch-smt-3',
    category: 'Sell Me This',
    title: 'An Empty Jar',
    prompt: 'Persuade your audience why paying $100 for an empty glass jar is the smartest decision of their life.'
  },
  {
    id: 'ch-smt-4',
    category: 'Sell Me This',
    title: 'A Single Sock',
    prompt: 'Sell a single unmatched cotton sock as a high-fashion collectors item.'
  },
  {
    id: 'ch-smt-5',
    category: 'Sell Me This',
    title: 'A Used Paperclip',
    prompt: 'Pitch a bent paperclip as an indispensable survival tool for modern executives.'
  },
  {
    id: 'ch-smt-6',
    category: 'Sell Me This',
    title: 'A Pocketful of Air',
    prompt: 'Convince an investor to buy premium fresh mountain air captured in a silk pouch.'
  },

  // 3. Would You Rather
  {
    id: 'ch-wyr-1',
    category: 'Would You Rather',
    title: 'Fly or Read Minds?',
    prompt: 'Would you rather have the power to fly or the ability to read minds? Defend your choice in one minute.'
  },
  {
    id: 'ch-wyr-2',
    category: 'Would You Rather',
    title: 'Travel 500 Years Past or Future?',
    prompt: 'Would you rather travel 500 years into the past or 500 years into the future? Explain why.'
  },
  {
    id: 'ch-wyr-3',
    category: 'Would You Rather',
    title: 'Infinite Wealth or Infinite Knowledge?',
    prompt: 'Would you rather possess unlimited financial wealth or unlimited universal knowledge? Convince us.'
  },
  {
    id: 'ch-wyr-4',
    category: 'Would You Rather',
    title: 'Live in the Oceans or Space?',
    prompt: 'Would you rather explore the deepest depths of the ocean or the furthest reaches of outer space?'
  },
  {
    id: 'ch-wyr-5',
    category: 'Would You Rather',
    title: 'Speak Every Language or Talk to Animals?',
    prompt: 'Would you rather fluently speak all human languages or communicate with every animal on Earth?'
  },

  // 4. 3 Random Words
  {
    id: 'ch-3rw-1',
    category: '3 Random Words',
    title: 'Elephant • Moon • Pizza',
    prompt: 'Create a captivating one-minute story using all three words seamlessly.',
    items: ['Elephant', 'Moon', 'Pizza']
  },
  {
    id: 'ch-3rw-2',
    category: '3 Random Words',
    title: 'Castle • Laptop • Detective',
    prompt: 'Create a captivating one-minute story using all three words seamlessly.',
    items: ['Castle', 'Laptop', 'Detective']
  },
  {
    id: 'ch-3rw-3',
    category: '3 Random Words',
    title: 'Submarine • Firework • Violin',
    prompt: 'Create a captivating one-minute story using all three words seamlessly.',
    items: ['Submarine', 'Firework', 'Violin']
  },
  {
    id: 'ch-3rw-4',
    category: '3 Random Words',
    title: 'Astronaut • Teacup • Shadow',
    prompt: 'Create a captivating one-minute story using all three words seamlessly.',
    items: ['Astronaut', 'Teacup', 'Shadow']
  },
  {
    id: 'ch-3rw-5',
    category: '3 Random Words',
    title: 'Lighthouse • Compass • Phoenix',
    prompt: 'Create an inspiring story weaving together these three powerful symbols.',
    items: ['Lighthouse', 'Compass', 'Phoenix']
  },

  // 5. Continue the Story
  {
    id: 'ch-cts-1',
    category: 'Continue the Story',
    title: 'The Mysterious Clock',
    prompt: 'The old grandfather clock stopped ticking, but then a subtle knock echoed from inside it...',
    items: ['Continue the story from this exact moment. What happens next?']
  },
  {
    id: 'ch-cts-2',
    category: 'Continue the Story',
    title: 'The Unopened Letter',
    prompt: 'I opened my desk drawer and found a sealed envelope addressed to me in my own handwriting from 20 years in the future...',
    items: ['Continue the story from this exact moment. What does the letter reveal?']
  },
  {
    id: 'ch-cts-3',
    category: 'Continue the Story',
    title: 'The Vanishing Train',
    prompt: 'The subway train came to a sudden halt at a dimly lit station that was not marked on any route map...',
    items: ['Continue the story from this exact moment. Describe stepping off the train.']
  },
  {
    id: 'ch-cts-4',
    category: 'Continue the Story',
    title: 'The Hidden Door',
    prompt: 'Behind the bookshelf in the old library, a heavy stone door clicked unlocked as I touched the brass dragon handle...',
    items: ['Continue the story from this exact moment. Describe what lies inside.']
  },

  // 6. Forbidden Words
  {
    id: 'ch-fw-1',
    category: 'Forbidden Words',
    title: 'Topic: Summer Vacation',
    prompt: 'Speak about your ideal summer vacation for one minute without uttering any of the forbidden words!',
    items: ['Forbidden: Beach', 'Sun', 'Hot', 'Swim', 'Ocean']
  },
  {
    id: 'ch-fw-2',
    category: 'Forbidden Words',
    title: 'Topic: Smartphones',
    prompt: 'Describe how modern smartphones changed human communication without using forbidden words!',
    items: ['Forbidden: Phone', 'Screen', 'App', 'Call', 'Internet']
  },
  {
    id: 'ch-fw-3',
    category: 'Forbidden Words',
    title: 'Topic: Coffee Routine',
    prompt: 'Describe your morning beverage or routine without saying any forbidden words!',
    items: ['Forbidden: Coffee', 'Drink', 'Morning', 'Cup', 'Bean']
  },
  {
    id: 'ch-fw-4',
    category: 'Forbidden Words',
    title: 'Topic: Movies & Cinema',
    prompt: 'Explain why you love watching movies without mentioning forbidden cinema terms!',
    items: ['Forbidden: Movie', 'Actor', 'Screen', 'Film', 'Theater']
  },

  // 7. Describe an Image
  {
    id: 'ch-dai-1',
    category: 'Describe an Image',
    title: 'Atmospheric Misty Forest',
    prompt: 'Describe this image in detail for one minute—focus on lighting, atmosphere, mood, and sensory details.',
    imageUrl: 'https://images.unsplash.com/photo-1511497584788-876761c11969?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ch-dai-2',
    category: 'Describe an Image',
    title: 'Cyberpunk Neon Cityscape',
    prompt: 'Describe this vibrant cityscape scene in detail, conveying the energy, architectural beauty, and story behind it.',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ch-dai-3',
    category: 'Describe an Image',
    title: 'Golden Sunset Horizon',
    prompt: 'Describe this peaceful scenery in detail, painting a vivid picture in the mind of your listener.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ch-dai-4',
    category: 'Describe an Image',
    title: 'Majestic Mountain Peak',
    prompt: 'Describe the raw power, icy solitude, and breathtaking grandeur of this mountain landscape.',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
  },

  // 8. Story Starter
  {
    id: 'ch-ss-1',
    category: 'Story Starter',
    title: 'The Memory Library',
    prompt: 'You wake up in a grand library where every book on the shelf contains a living memory from your past. You pull down one glowing book...'
  },
  {
    id: 'ch-ss-2',
    category: 'Story Starter',
    title: 'The Golden Key',
    prompt: 'While walking alone along a fog-covered beach at sunrise, you spot an intricate golden key washed ashore inside a glass bottle...'
  },
  {
    id: 'ch-ss-3',
    category: 'Story Starter',
    title: 'The Midnight Broadcast',
    prompt: 'You tune your old car radio at 3:00 AM to a strange frequency that begins reading aloud tomorrow morning’s news headlines...'
  },
  {
    id: 'ch-ss-4',
    category: 'Story Starter',
    title: 'The Forgotten Lighthouse',
    prompt: 'High atop a cliff in a storm-swept coastal town, a long-abandoned lighthouse beacon suddenly flickers back to life...'
  },

  // 9. Explain Like I'm Five
  {
    id: 'ch-eli5-1',
    category: "Explain Like I'm Five",
    title: 'Quantum Entanglement',
    prompt: 'Explain the concept of quantum entanglement so simply and clearly that a 5-year-old child can understand it.'
  },
  {
    id: 'ch-eli5-2',
    category: "Explain Like I'm Five",
    title: 'How the Internet Works',
    prompt: 'Explain how the Internet sends messages across the world so simply that a 5-year-old child understands.'
  },
  {
    id: 'ch-eli5-3',
    category: "Explain Like I'm Five",
    title: 'Inflation & Money',
    prompt: 'Explain why prices go up over time so simply that a 5-year-old child understands.'
  },
  {
    id: 'ch-eli5-4',
    category: "Explain Like I'm Five",
    title: 'Black Holes in Space',
    prompt: 'Explain what a black hole is in space using simple everyday analogies a young child can grasp.'
  },

  // 10. Rapid Fire
  {
    id: 'ch-rf-1',
    category: 'Rapid Fire',
    title: '5 Quick Questions',
    prompt: 'Answer all 5 questions as quickly and eloquently as possible in under 60 seconds.',
    items: [
      '1. What is your all-time favorite movie?',
      '2. Would you rather live in the mountains or by the beach?',
      '3. What daily habit has changed your life the most?',
      '4. Are you a night owl or an early bird?',
      '5. Name one country you dream of visiting.'
    ]
  },
  {
    id: 'ch-rf-2',
    category: 'Rapid Fire',
    title: 'Speed Round Challenge',
    prompt: 'Answer all 5 questions without hesitation or long pauses.',
    items: [
      '1. What is your ultimate comfort food?',
      '2. What is the best piece of advice you ever received?',
      '3. If you could have any superpower, what would it be?',
      '4. What book should everyone read at least once?',
      '5. Describe your personality in three words.'
    ]
  },
  {
    id: 'ch-rf-3',
    category: 'Rapid Fire',
    title: 'Creativity Blitz',
    prompt: 'Fire off quick answers to these 5 creative imagination prompts!',
    items: [
      '1. What song best describes your mood right now?',
      '2. If you opened a café, what would you name it?',
      '3. Name one historical figure you’d love to have dinner with.',
      '4. What skill would you instantly master if given a magic wand?',
      '5. What rule in life do you think everyone should follow?'
    ]
  }
];
