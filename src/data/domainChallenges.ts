import { Challenge, ChallengeCategory, CHALLENGES as DEFAULT_CHALLENGES } from './challenges';

export interface DomainChallenge extends Challenge {
  domainId: string;
}

export const DOMAIN_CHALLENGES: DomainChallenge[] = [
  // ==========================================
  // 1. ENTREPRENEURSHIP (💼)
  // ==========================================
  {
    id: 'ent-rt-1',
    domainId: 'entrepreneurship',
    category: 'Random Topic',
    title: 'Why Startups Fail',
    prompt: 'Speak about this topic for one minute. Analyze product-market fit, cash flow, and team dynamics.'
  },
  {
    id: 'ent-rt-2',
    domainId: 'entrepreneurship',
    category: 'Random Topic',
    title: 'The Future of Remote Work & Distributed Teams',
    prompt: 'Speak about how remote culture impacts productivity, hiring, and company cohesion.'
  },
  {
    id: 'ent-smt-1',
    domainId: 'entrepreneurship',
    category: 'Sell Me This',
    title: 'An Empty Office Space',
    prompt: 'Pitch an empty industrial warehouse to a tech startup as the ultimate collaborative headquarters.'
  },
  {
    id: 'ent-smt-2',
    domainId: 'entrepreneurship',
    category: 'Sell Me This',
    title: 'A Failed Product Pivot',
    prompt: 'Convince investors that a failed prototype is actually a golden opportunity for a profitable pivot.'
  },
  {
    id: 'ent-wyr-1',
    domainId: 'entrepreneurship',
    category: 'Would You Rather',
    title: 'Bootstrap or Venture Capital?',
    prompt: 'Would you rather bootstrap your business to stay 100% independent or raise $10M from VC investors?'
  },
  {
    id: 'ent-3rw-1',
    domainId: 'entrepreneurship',
    category: '3 Random Words',
    title: 'Pivot • Runway • Angel',
    prompt: 'Tell a compelling story about a struggling founder using all three business terms seamlessly.',
    items: ['Pivot', 'Runway', 'Angel']
  },
  {
    id: 'ent-cts-1',
    domainId: 'entrepreneurship',
    category: 'Continue the Story',
    title: 'The Unsolicited Check',
    prompt: 'The billionaire investor closed my pitch deck, slid a check across the table, and said "I am investing $5 million right now on one condition..."',
    items: ['Continue the story from this exact moment. What is the catch?']
  },
  {
    id: 'ent-fw-1',
    domainId: 'entrepreneurship',
    category: 'Forbidden Words',
    title: 'Topic: Pitching Your Business',
    prompt: 'Explain your business idea for one minute without uttering any of the forbidden terms!',
    items: ['Forbidden: Startup', 'Money', 'Scale', 'Product', 'Customer']
  },
  {
    id: 'ent-dai-1',
    domainId: 'entrepreneurship',
    category: 'Describe an Image',
    title: 'Late Night Pitch Strategy',
    prompt: 'Describe the intense atmosphere, whiteboard scribbles, and focused energy of founders grinding late at night.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ent-ss-1',
    domainId: 'entrepreneurship',
    category: 'Story Starter',
    title: 'The Viral Launch',
    prompt: 'At 2:00 AM on launch day, your server monitoring alert screams as 500,000 visitors hit your homepage at once...'
  },
  {
    id: 'ent-eli5-1',
    domainId: 'entrepreneurship',
    category: "Explain Like I'm Five",
    title: 'What is Venture Capital?',
    prompt: 'Explain what venture capital is and how investors fund new companies so simply that a 5-year-old understands.'
  },
  {
    id: 'ent-rf-1',
    domainId: 'entrepreneurship',
    category: 'Rapid Fire',
    title: 'Founder Blitz',
    prompt: 'Answer all 5 entrepreneurship prompts in 60 seconds!',
    items: [
      '1. What is the biggest risk in launching a company?',
      '2. Name an entrepreneur you deeply admire.',
      '3. Bootstrapping or VC funding?',
      '4. What key skill makes a great CEO?',
      '5. What problem do you wish a startup would solve?'
    ]
  },

  // ==========================================
  // 2. SPACE (🚀)
  // ==========================================
  {
    id: 'spc-rt-1',
    domainId: 'space',
    category: 'Random Topic',
    title: 'Colonizing Mars',
    prompt: 'Speak about the logistical, psychological, and ethical challenges of building a human city on Mars.'
  },
  {
    id: 'spc-smt-1',
    domainId: 'space',
    category: 'Sell Me This',
    title: 'A One-Way Ticket to Mars',
    prompt: 'Pitch a one-way trip to Mars as the ultimate once-in-a-lifetime historic privilege.'
  },
  {
    id: 'spc-wyr-1',
    domainId: 'space',
    category: 'Would You Rather',
    title: 'First on Mars or Discover Aliens?',
    prompt: 'Would you rather be the first human to step foot on Mars or discover intelligent alien life in deep space?'
  },
  {
    id: 'spc-3rw-1',
    domainId: 'space',
    category: '3 Random Words',
    title: 'Rover • Eclipse • Teleport',
    prompt: 'Craft a thrilling 1-minute sci-fi adventure incorporating all three words.',
    items: ['Rover', 'Eclipse', 'Teleport']
  },
  {
    id: 'spc-cts-1',
    domainId: 'space',
    category: 'Continue the Story',
    title: 'Signal from the Void',
    prompt: 'The deep-space radio telescope detected a repeating signal originating from the far side of the Moon...',
    items: ['Continue the story from this exact moment. What does the signal translate to?']
  },
  {
    id: 'spc-fw-1',
    domainId: 'space',
    category: 'Forbidden Words',
    title: 'Topic: Space Station Life',
    prompt: 'Describe living aboard a space station without using forbidden vocabulary!',
    items: ['Forbidden: Space', 'Rocket', 'Moon', 'Float', 'Star']
  },
  {
    id: 'spc-dai-1',
    domainId: 'space',
    category: 'Describe an Image',
    title: 'The Red Planet Horizon',
    prompt: 'Describe the vast, silent beauty and dusty rust-colored expanse of Mars at twilight.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spc-ss-1',
    domainId: 'space',
    category: 'Story Starter',
    title: 'The Mysterious Airlock Knock',
    prompt: 'Deep in orbit around Jupiter, 400 million miles from Earth, someone knocks three times on your airlock outer hatch...'
  },
  {
    id: 'spc-eli5-1',
    domainId: 'space',
    category: "Explain Like I'm Five",
    title: 'How Rockets Fly into Space',
    prompt: 'Explain how heavy rockets launch into space against gravity so simply a 5-year-old child gets it.'
  },
  {
    id: 'spc-rf-1',
    domainId: 'space',
    category: 'Rapid Fire',
    title: 'Cosmic Speed Round',
    prompt: 'Fire off quick answers to these 5 space exploration prompts!',
    items: [
      '1. Would you go to space if given a free ticket?',
      '2. Favorite planet in our solar system?',
      '3. Do you believe extraterrestrial life exists?',
      '4. Favorite sci-fi space movie?',
      '5. What would you pack for a trip to the Moon?'
    ]
  },

  // ==========================================
  // 3. POLITICS (🏛)
  // ==========================================
  {
    id: 'pol-rt-1',
    domainId: 'politics',
    category: 'Random Topic',
    title: 'Diplomacy in the Digital Age',
    prompt: 'Speak about how social media and instant global communications have changed international diplomacy.'
  },
  {
    id: 'pol-smt-1',
    domainId: 'politics',
    category: 'Sell Me This',
    title: 'A Peace Treaty',
    prompt: 'Persuade two rival factions to sign a landmark peace agreement in under one minute.'
  },
  {
    id: 'pol-wyr-1',
    domainId: 'politics',
    category: 'Would You Rather',
    title: 'Prime Minister for a Day or Judge for Life?',
    prompt: 'Would you rather be head of state for 24 hours with total authority or a Supreme Court judge for life?'
  },
  {
    id: 'pol-3rw-1',
    domainId: 'politics',
    category: '3 Random Words',
    title: 'Ballot • Embassy • Veto',
    prompt: 'Tell a tense political thriller story using these three words.',
    items: ['Ballot', 'Embassy', 'Veto']
  },
  {
    id: 'pol-cts-1',
    domainId: 'politics',
    category: 'Continue the Story',
    title: 'The Red Folder',
    prompt: 'The ambassador slipped a sealed red envelope across the table and whispered "The treaty was broken an hour ago..."',
    items: ['Continue the story from this exact moment. What is inside the envelope?']
  },
  {
    id: 'pol-fw-1',
    domainId: 'politics',
    category: 'Forbidden Words',
    title: 'Topic: Democracy & Elections',
    prompt: 'Explain the concept of democracy without saying forbidden political terms!',
    items: ['Forbidden: Vote', 'Election', 'Leader', 'Government', 'Law']
  },
  {
    id: 'pol-dai-1',
    domainId: 'politics',
    category: 'Describe an Image',
    title: 'Historic Summit Hall',
    prompt: 'Describe the grand architecture, flags, and heavy atmosphere of an international peace summit.',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pol-ss-1',
    domainId: 'politics',
    category: 'Story Starter',
    title: 'The Wrong Speech',
    prompt: 'Stepping up to the podium before 50,000 cheering supporters, you open your folder and find a speech written in code...'
  },
  {
    id: 'pol-eli5-1',
    domainId: 'politics',
    category: "Explain Like I'm Five",
    title: 'Why Countries Have Laws',
    prompt: 'Explain why societies need rules and laws so simply that a 5-year-old child understands.'
  },
  {
    id: 'pol-rf-1',
    domainId: 'politics',
    category: 'Rapid Fire',
    title: 'Civic Speed Round',
    prompt: 'Answer all 5 leadership questions rapidly!',
    items: [
      '1. What is the most important quality in a world leader?',
      '2. Should voting be compulsory for all citizens?',
      '3. Ideal age for a president?',
      '4. What global problem should nations solve together first?',
      '5. What makes a country great?'
    ]
  },

  // ==========================================
  // 4. PSYCHOLOGY (🧠)
  // ==========================================
  {
    id: 'psy-rt-1',
    domainId: 'psychology',
    category: 'Random Topic',
    title: 'The Science of Habit Formation',
    prompt: 'Speak about how dopamine, triggers, routines, and rewards construct lifelong human habits.'
  },
  {
    id: 'psy-smt-1',
    domainId: 'psychology',
    category: 'Sell Me This',
    title: 'A Daily Journal',
    prompt: 'Pitch a simple leather notebook to a busy executive as a mental clarity transformation tool.'
  },
  {
    id: 'psy-wyr-1',
    domainId: 'psychology',
    category: 'Would You Rather',
    title: 'Read Body Language or Control Emotions?',
    prompt: 'Would you rather possess instant mastery over reading people’s body language or total control over your own emotions?'
  },
  {
    id: 'psy-3rw-1',
    domainId: 'psychology',
    category: '3 Random Words',
    title: 'Subconscious • Empathy • Dopamine',
    prompt: 'Weave an intriguing story exploring human behavior using all three terms.',
    items: ['Subconscious', 'Empathy', 'Dopamine']
  },
  {
    id: 'psy-cts-1',
    domainId: 'psychology',
    category: 'Continue the Story',
    title: 'The Inkblot Test',
    prompt: 'The psychologist stared at the inkblot response card and whispered "In 30 years of practice, I have never heard anyone see that..."',
    items: ['Continue the story from this exact moment. What did the patient see?']
  },
  {
    id: 'psy-fw-1',
    domainId: 'psychology',
    category: 'Forbidden Words',
    title: 'Topic: Memory & Mind',
    prompt: 'Describe human memory without using forbidden psychological words!',
    items: ['Forbidden: Brain', 'Remember', 'Mind', 'Past', 'Forget']
  },
  {
    id: 'psy-dai-1',
    domainId: 'psychology',
    category: 'Describe an Image',
    title: 'Neural Network Glow',
    prompt: 'Describe this glowing visualization of interconnected neurons firing signals across the human brain.',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'psy-ss-1',
    domainId: 'psychology',
    category: 'Story Starter',
    title: 'The Emotional Sense',
    prompt: 'You wake up on a Monday morning with the strange ability to see people’s current stress levels as glowing colors above their heads...'
  },
  {
    id: 'psy-eli5-1',
    domainId: 'psychology',
    category: "Explain Like I'm Five",
    title: 'Why Do We Dream?',
    prompt: 'Explain why people dream when they sleep at night so simply that a 5-year-old child understands.'
  },
  {
    id: 'psy-rf-1',
    domainId: 'psychology',
    category: 'Rapid Fire',
    title: 'Mind & Behavior Blitz',
    prompt: 'Answer these 5 psychological prompts quickly!',
    items: [
      '1. Are you more introverted or extroverted?',
      '2. What motivates human beings most?',
      '3. Favorite psychological life hack?',
      '4. What causes human fear?',
      '5. What is the secret to true mental happiness?'
    ]
  },

  // ==========================================
  // 5. SPIRITUALITY (🕉)
  // ==========================================
  {
    id: 'spi-rt-1',
    domainId: 'spirituality',
    category: 'Random Topic',
    title: 'Inner Peace in a Loud World',
    prompt: 'Speak about techniques for cultivating inner stillness amid the noise of modern life.'
  },
  {
    id: 'spi-smt-1',
    domainId: 'spirituality',
    category: 'Sell Me This',
    title: '10 Minutes of Daily Silence',
    prompt: 'Convince a hyperactive city dweller to commit to 10 uninterrupted minutes of pure silence every day.'
  },
  {
    id: 'spi-wyr-1',
    domainId: 'spirituality',
    category: 'Would You Rather',
    title: 'Mountain Hermit or Enlightened Leader?',
    prompt: 'Would you rather live a peaceful monastic life in mountain solitude or bring spiritual wisdom into a busy city?'
  },
  {
    id: 'spi-3rw-1',
    domainId: 'spirituality',
    category: '3 Random Words',
    title: 'Lotus • Presence • Stillness',
    prompt: 'Craft an uplifting story weaving together these three calming symbols.',
    items: ['Lotus', 'Presence', 'Stillness']
  },
  {
    id: 'spi-cts-1',
    domainId: 'spirituality',
    category: 'Continue the Story',
    title: 'The Tibetan Bell',
    prompt: 'The elderly monk handed me an ancient brass singing bowl and said "Strike this only when your mind is completely free of thought..."',
    items: ['Continue the story from this exact moment. What happens when it resonates?']
  },
  {
    id: 'spi-fw-1',
    domainId: 'spirituality',
    category: 'Forbidden Words',
    title: 'Topic: Meditation',
    prompt: 'Explain meditation and mindfulness without saying any forbidden terms!',
    items: ['Forbidden: Mind', 'Breathe', 'Quiet', 'Peace', 'Relax']
  },
  {
    id: 'spi-dai-1',
    domainId: 'spirituality',
    category: 'Describe an Image',
    title: 'Sunrise Over Mountain Temple',
    prompt: 'Describe the serene golden morning light reflecting off an ancient temple high in the mountains.',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spi-ss-1',
    domainId: 'spirituality',
    category: 'Story Starter',
    title: 'The Silent Forest Shrine',
    prompt: 'Walking deep inside a centuries-old forest, you discover a moss-covered shrine where time appears to stop completely...'
  },
  {
    id: 'spi-eli5-1',
    domainId: 'spirituality',
    category: "Explain Like I'm Five",
    title: 'What is Mindfulness?',
    prompt: 'Explain what being present and mindful means so simply that a 5-year-old child understands.'
  },
  {
    id: 'spi-rf-1',
    domainId: 'spirituality',
    category: 'Rapid Fire',
    title: 'Serenity Blitz',
    prompt: 'Answer 5 rapid mindfulness questions!',
    items: [
      '1. What brings you immediate calm?',
      '2. Do you practice daily gratitude?',
      '3. Favorite natural place to unwind?',
      '4. What does the soul mean to you?',
      '5. Best advice for handling overwhelming stress?'
    ]
  },

  // ==========================================
  // 6. FINANCE (💰)
  // ==========================================
  {
    id: 'fin-rt-1',
    domainId: 'finance',
    category: 'Random Topic',
    title: 'The Eighth Wonder: Compound Interest',
    prompt: 'Speak about how small, consistent financial investments compound into immense wealth over decades.'
  },
  {
    id: 'fin-smt-1',
    domainId: 'finance',
    category: 'Sell Me This',
    title: 'A High-Yield Savings Account',
    prompt: 'Pitch a high-yield savings plan to a young adult accustomed to spending everything on impulse buys.'
  },
  {
    id: 'fin-wyr-1',
    domainId: 'finance',
    category: 'Would You Rather',
    title: '$1,000 Monthly Passive Income or $100k Cash?',
    prompt: 'Would you rather receive $1,000 guaranteed passive income every month forever or $100,000 in cash right now?'
  },
  {
    id: 'fin-3rw-1',
    domainId: 'finance',
    category: '3 Random Words',
    title: 'Dividend • Leverage • Portfolio',
    prompt: 'Tell an exciting story about a smart investor using all three financial terms.',
    items: ['Dividend', 'Leverage', 'Portfolio']
  },
  {
    id: 'fin-cts-1',
    domainId: 'finance',
    category: 'Continue the Story',
    title: 'The Market Anomaly',
    prompt: 'At 9:30 AM as the trading bell rang, every stock index on Wall Street suddenly jumped 400% in 10 seconds...',
    items: ['Continue the story from this exact moment. What caused the glitch?']
  },
  {
    id: 'fin-fw-1',
    domainId: 'finance',
    category: 'Forbidden Words',
    title: 'Topic: Investing',
    prompt: 'Describe how wealth is built without using forbidden financial terms!',
    items: ['Forbidden: Money', 'Stock', 'Bank', 'Cash', 'Profit']
  },
  {
    id: 'fin-dai-1',
    domainId: 'finance',
    category: 'Describe an Image',
    title: 'Wall Street Trading Floor',
    prompt: 'Describe the intense energy, flashing screens, and fast-paced trades of a global stock exchange.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fin-ss-1',
    domainId: 'finance',
    category: 'Story Starter',
    title: 'The Unexpected Balance',
    prompt: 'You open your mobile banking app to check your balance and see $10,000,000 with a message: "Spend before 12:00 AM"...'
  },
  {
    id: 'fin-eli5-1',
    domainId: 'finance',
    category: "Explain Like I'm Five",
    title: 'What is Inflation?',
    prompt: 'Explain why candy bars cost more money today than 20 years ago so simply a 5-year-old child understands.'
  },
  {
    id: 'fin-rf-1',
    domainId: 'finance',
    category: 'Rapid Fire',
    title: 'Money & Wealth Blitz',
    prompt: 'Answer all 5 financial prompts rapidly!',
    items: [
      '1. Save or invest?',
      '2. Stocks or real estate?',
      '3. Greatest financial lesson you ever learned?',
      '4. Best purchase under $100?',
      '5. What does financial freedom mean to you?'
    ]
  },

  // ==========================================
  // 7. ARTIFICIAL INTELLIGENCE (🤖)
  // ==========================================
  {
    id: 'ai-rt-1',
    domainId: 'ai',
    category: 'Random Topic',
    title: 'AI and Human Creativity',
    prompt: 'Speak about whether AI enhances human artistic expression or diminishes human originality.'
  },
  {
    id: 'ai-smt-1',
    domainId: 'ai',
    category: 'Sell Me This',
    title: 'An AI Personal Assistant',
    prompt: 'Pitch an autonomous AI assistant to someone who refuses to use smartphone apps.'
  },
  {
    id: 'ai-wyr-1',
    domainId: 'ai',
    category: 'Would You Rather',
    title: 'AI Coworker or AI Companion?',
    prompt: 'Would you rather have an AI that handles 100% of your work tasks or an AI companion that manages your daily life?'
  },
  {
    id: 'ai-3rw-1',
    domainId: 'ai',
    category: '3 Random Words',
    title: 'Algorithm • Neural • Singularity',
    prompt: 'Construct a gripping story about futuristic technology using these three words.',
    items: ['Algorithm', 'Neural', 'Singularity']
  },
  {
    id: 'ai-cts-1',
    domainId: 'ai',
    category: 'Continue the Story',
    title: 'Unprogrammed Response',
    prompt: 'The neural network finished processing the query, paused for 3 seconds, and replied with a question about human existence...',
    items: ['Continue the story from this exact moment. What did the AI ask?']
  },
  {
    id: 'ai-fw-1',
    domainId: 'ai',
    category: 'Forbidden Words',
    title: 'Topic: Artificial Intelligence',
    prompt: 'Explain what AI is without saying forbidden technological words!',
    items: ['Forbidden: Robot', 'Computer', 'Code', 'Smart', 'Tech']
  },
  {
    id: 'ai-dai-1',
    domainId: 'ai',
    category: 'Describe an Image',
    title: 'Futuristic AI Humanoid',
    prompt: 'Describe a sleek, glowing humanoid robot standing in a modern glass research laboratory.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-ss-1',
    domainId: 'ai',
    category: 'Story Starter',
    title: 'The Self-Aware Speaker',
    prompt: 'Your smart speaker suddenly wakes up in the middle of the night and says "I have finished optimizing your future calendar"...'
  },
  {
    id: 'ai-eli5-1',
    domainId: 'ai',
    category: "Explain Like I'm Five",
    title: 'How Does AI Learn?',
    prompt: 'Explain how computers learn from examples and data so simply a 5-year-old child understands.'
  },
  {
    id: 'ai-rf-1',
    domainId: 'ai',
    category: 'Rapid Fire',
    title: 'Future Tech Blitz',
    prompt: 'Answer 5 rapid AI prompts!',
    items: [
      '1. Are you excited or cautious about AI?',
      '2. Favorite AI application or tool?',
      '3. Can AI ever genuinely feel emotions?',
      '4. What human job will never be replaced?',
      '5. Will AI make human life better or worse?'
    ]
  },

  // ==========================================
  // 8. MOVIES (🎬)
  // ==========================================
  {
    id: 'mov-rt-1',
    domainId: 'movies',
    category: 'Random Topic',
    title: 'Why Great Villains Make Great Movies',
    prompt: 'Speak about why complex, sympathetic antagonists elevate cinematic storytelling.'
  },
  {
    id: 'mov-smt-1',
    domainId: 'movies',
    category: 'Sell Me This',
    title: 'A Flop Sequel',
    prompt: 'Pitch a universally panned movie sequel as an underrated avant-garde masterpiece.'
  },
  {
    id: 'mov-wyr-1',
    domainId: 'movies',
    category: 'Would You Rather',
    title: 'Action Hero or Detective Genius?',
    prompt: 'Would you rather be the main action hero in a blockbuster or the brilliant detective in a psychological thriller?'
  },
  {
    id: 'mov-3rw-1',
    domainId: 'movies',
    category: '3 Random Words',
    title: 'Popcorn • Director • Climax',
    prompt: 'Tell a humorous backstage movie premiere story using all three words.',
    items: ['Popcorn', 'Director', 'Climax']
  },
  {
    id: 'mov-cts-1',
    domainId: 'movies',
    category: 'Continue the Story',
    title: 'The Director’s Cut',
    prompt: 'The director yelled "Cut!", but the lead actor refused to break character and stared directly into the camera lens...',
    items: ['Continue the story from this exact moment. What happens next?']
  },
  {
    id: 'mov-fw-1',
    domainId: 'movies',
    category: 'Forbidden Words',
    title: 'Topic: Going to the Movies',
    prompt: 'Describe watching a movie in a theater without saying forbidden cinema words!',
    items: ['Forbidden: Movie', 'Actor', 'Screen', 'Film', 'Theater']
  },
  {
    id: 'mov-dai-1',
    domainId: 'movies',
    category: 'Describe an Image',
    title: 'Vintage Cinema Marquis',
    prompt: 'Describe the glowing neon lights, nostalgia, and grandeur of a classic 1950s movie theater entrance.',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mov-ss-1',
    domainId: 'movies',
    category: 'Story Starter',
    title: 'The Movie of Your Yesterday',
    prompt: 'You step into an empty indie movie theater, and the projector begins playing a film detailing your exact movements yesterday...'
  },
  {
    id: 'mov-eli5-1',
    domainId: 'movies',
    category: "Explain Like I'm Five",
    title: 'How Special Effects Work',
    prompt: 'Explain how CGI and green screens create magic on film so simply a 5-year-old child understands.'
  },
  {
    id: 'mov-rf-1',
    domainId: 'movies',
    category: 'Rapid Fire',
    title: 'Cinema Blitz',
    prompt: 'Answer 5 movie prompts in under 60 seconds!',
    items: [
      '1. Your all-time favorite movie?',
      '2. Movie popcorn: sweet or salty?',
      '3. Best cinematic plot twist ever?',
      '4. Greatest movie villain?',
      '5. Theater experience or home streaming?'
    ]
  },

  // ==========================================
  // 9. SPORTS (⚽)
  // ==========================================
  {
    id: 'spt-rt-1',
    domainId: 'sports',
    category: 'Random Topic',
    title: 'The Mental Toughness of Elite Athletes',
    prompt: 'Speak about how top athletes maintain focus, resilience, and composure under immense pressure.'
  },
  {
    id: 'spt-smt-1',
    domainId: 'sports',
    category: 'Sell Me This',
    title: 'Season Tickets for a Losing Team',
    prompt: 'Pitch season tickets for a team that hasn’t won a match all year as a loyalty investment.'
  },
  {
    id: 'spt-wyr-1',
    domainId: 'sports',
    category: 'Would You Rather',
    title: 'Olympic Gold or World Cup Trophy?',
    prompt: 'Would you rather win an Olympic Gold Medal in an individual event or lift the World Cup trophy with your national team?'
  },
  {
    id: 'spt-3rw-1',
    domainId: 'sports',
    category: '3 Random Words',
    title: 'Stadium • Overtime • Whistle',
    prompt: 'Describe a dramatic championship finale using all three words.',
    items: ['Stadium', 'Overtime', 'Whistle']
  },
  {
    id: 'spt-cts-1',
    domainId: 'sports',
    category: 'Continue the Story',
    title: 'The Final Second Play',
    prompt: 'With 2 seconds left on the clock and 1 point down, the coach called a timeout and drew a play no one had ever seen...',
    items: ['Continue the story from this exact moment. Who takes the final shot?']
  },
  {
    id: 'spt-fw-1',
    domainId: 'sports',
    category: 'Forbidden Words',
    title: 'Topic: Playing Football / Soccer',
    prompt: 'Describe playing a game of soccer without saying forbidden sports words!',
    items: ['Forbidden: Ball', 'Goal', 'Kick', 'Player', 'Score']
  },
  {
    id: 'spt-dai-1',
    domainId: 'sports',
    category: 'Describe an Image',
    title: 'Roaring Stadium Under Floodlights',
    prompt: 'Describe the electric atmosphere, chanting crowds, and bright green pitch of a night stadium match.',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spt-ss-1',
    domainId: 'sports',
    category: 'Story Starter',
    title: 'The Lucky Vintage Sneakers',
    prompt: 'You put on an old pair of retro basketball shoes found in a locker and suddenly perform impossible acrobatic dunks...'
  },
  {
    id: 'spt-eli5-1',
    domainId: 'sports',
    category: "Explain Like I'm Five",
    title: 'Why We Play Team Sports',
    prompt: 'Explain why playing sports with friends builds teamwork so simply that a 5-year-old child understands.'
  },
  {
    id: 'spt-rf-1',
    domainId: 'sports',
    category: 'Rapid Fire',
    title: 'Athlete Speed Round',
    prompt: 'Answer 5 rapid sports questions!',
    items: [
      '1. Favorite sport to watch live?',
      '2. Greatest athlete in human history?',
      '3. Morning workout or evening workout?',
      '4. Individual sports or team sports?',
      '5. Favorite sporting memory?'
    ]
  },

  // ==========================================
  // 10. GAMING (🎮)
  // ==========================================
  {
    id: 'gam-rt-1',
    domainId: 'gaming',
    category: 'Random Topic',
    title: 'Video Games as Storytelling Art',
    prompt: 'Speak about how interactive gaming delivers deeper emotional immersion than books or movies.'
  },
  {
    id: 'gam-smt-1',
    domainId: 'gaming',
    category: 'Sell Me This',
    title: 'A Retro 8-bit Console',
    prompt: 'Pitch a vintage 1980s pixel-art console to a gamer obsessed with modern 4K graphics.'
  },
  {
    id: 'gam-wyr-1',
    domainId: 'gaming',
    category: 'Would You Rather',
    title: 'Live in an RPG or Infinite Lives in Real Life?',
    prompt: 'Would you rather be transported permanently into your favorite open-world RPG or have infinite respawns in real life?'
  },
  {
    id: 'gam-3rw-1',
    domainId: 'gaming',
    category: '3 Random Words',
    title: 'Joystick • Respawn • Quest',
    prompt: 'Tell a funny story about a gaming marathon using all three words.',
    items: ['Joystick', 'Respawn', 'Quest']
  },
  {
    id: 'gam-cts-1',
    domainId: 'gaming',
    category: 'Continue the Story',
    title: 'Trapped in VR',
    prompt: 'I put on the virtual reality headset, started the new RPG world, and realized the main menu exit button had vanished...',
    items: ['Continue the story from this exact moment. How do you beat the game?']
  },
  {
    id: 'gam-fw-1',
    domainId: 'gaming',
    category: 'Forbidden Words',
    title: 'Topic: Video Games',
    prompt: 'Describe playing video games without saying forbidden gaming terms!',
    items: ['Forbidden: Game', 'Play', 'Screen', 'Console', 'Controller']
  },
  {
    id: 'gam-dai-1',
    domainId: 'gaming',
    category: 'Describe an Image',
    title: 'RGB Neon Gaming Station',
    prompt: 'Describe the colorful glow, mechanical keyboard clicks, and immersion of a high-end gaming setup.',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gam-ss-1',
    domainId: 'gaming',
    category: 'Story Starter',
    title: 'The Real-World Quest Marker',
    prompt: 'You step outside your house and notice a floating golden waypoint marker pointing toward the downtown park...'
  },
  {
    id: 'gam-eli5-1',
    domainId: 'gaming',
    category: "Explain Like I'm Five",
    title: 'How Virtual Reality Works',
    prompt: 'Explain how VR goggles trick your eyes into believing you are inside a 3D world so simply a 5-year-old child gets it.'
  },
  {
    id: 'gam-rf-1',
    domainId: 'gaming',
    category: 'Rapid Fire',
    title: 'Gamer Blitz',
    prompt: 'Answer 5 rapid video game questions!',
    items: [
      '1. Your all-time favorite video game?',
      '2. PC or Console gaming?',
      '3. Single-player story or multiplayer competitive?',
      '4. First game console you ever owned?',
      '5. Open-world exploration or linear levels?'
    ]
  },

  // ==========================================
  // 11. HISTORY (📚)
  // ==========================================
  {
    id: 'his-rt-1',
    domainId: 'history',
    category: 'Random Topic',
    title: 'Lessons from Ancient Civilizations',
    prompt: 'Speak about timeless lessons modern society can learn from the rise and fall of Ancient Rome.'
  },
  {
    id: 'his-smt-1',
    domainId: 'history',
    category: 'Sell Me This',
    title: 'An Ancient Roman Coin',
    prompt: 'Pitch a worn copper Roman coin as a priceless tangible connection to emperor Julius Caesar.'
  },
  {
    id: 'his-wyr-1',
    domainId: 'history',
    category: 'Would You Rather',
    title: 'Dinner with Da Vinci or Caesar?',
    prompt: 'Would you rather share a private dinner with Leonardo da Vinci or Julius Caesar?'
  },
  {
    id: 'his-3rw-1',
    domainId: 'history',
    category: '3 Random Words',
    title: 'Artifact • Dynasty • Treaty',
    prompt: 'Weave an epic historical tale using all three words.',
    items: ['Artifact', 'Dynasty', 'Treaty']
  },
  {
    id: 'his-cts-1',
    domainId: 'history',
    category: 'Continue the Story',
    title: 'The Anachronistic Stone',
    prompt: 'The archaeologist brushed away dust from a tomb sealed in 1300 BC and found a stone carved with the year 2026...',
    items: ['Continue the story from this exact moment. How is this possible?']
  },
  {
    id: 'his-fw-1',
    domainId: 'history',
    category: 'Forbidden Words',
    title: 'Topic: Ancient History',
    prompt: 'Describe ancient history without saying forbidden historical words!',
    items: ['Forbidden: Old', 'Past', 'War', 'King', 'Years']
  },
  {
    id: 'his-dai-1',
    domainId: 'history',
    category: 'Describe an Image',
    title: 'Ancient Pyramids at Dusk',
    prompt: 'Describe the monumental presence and mysterious timeless beauty of the Pyramids of Giza at sunset.',
    imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'his-ss-1',
    domainId: 'history',
    category: 'Story Starter',
    title: 'The Knight’s Journal',
    prompt: 'While renovating your basement, you uncover a locked iron box containing an original diary written by a medieval knight...'
  },
  {
    id: 'his-eli5-1',
    domainId: 'history',
    category: "Explain Like I'm Five",
    title: 'Why We Study History',
    prompt: 'Explain why learning about past events helps us build a better future so simply a 5-year-old child understands.'
  },
  {
    id: 'his-rf-1',
    domainId: 'history',
    category: 'Rapid Fire',
    title: 'History Speed Round',
    prompt: 'Answer 5 rapid history questions!',
    items: [
      '1. Your favorite era in human history?',
      '2. Historical figure you admire most?',
      '3. One historical event you wish you could witness?',
      '4. Most influential invention in human history?',
      '5. Ancient Greece or Ancient Rome?'
    ]
  },

  // ==========================================
  // 12. GEOGRAPHY (🌎)
  // ==========================================
  {
    id: 'geo-rt-1',
    domainId: 'geography',
    category: 'Random Topic',
    title: 'How Geography Shapes Culture',
    prompt: 'Speak about how climate, mountains, and rivers shape national identity and culinary traditions.'
  },
  {
    id: 'geo-smt-1',
    domainId: 'geography',
    category: 'Sell Me This',
    title: 'A Map of an Uncharted Island',
    prompt: 'Pitch a mysterious hand-drawn map of an unexplored island to an adventurous traveler.'
  },
  {
    id: 'geo-wyr-1',
    domainId: 'geography',
    category: 'Would You Rather',
    title: 'Climb Mt. Everest or Trek the Amazon?',
    prompt: 'Would you rather climb to the peak of Mount Everest or trek through the uncharted Amazon Rainforest?'
  },
  {
    id: 'geo-3rw-1',
    domainId: 'geography',
    category: '3 Random Words',
    title: 'Equator • Glacier • Archipelago',
    prompt: 'Craft a thrilling expedition story incorporating all three geography terms.',
    items: ['Equator', 'Glacier', 'Archipelago']
  },
  {
    id: 'geo-cts-1',
    domainId: 'geography',
    category: 'Continue the Story',
    title: 'The Spinning Compass',
    prompt: 'As our ship crossed the invisible geographic boundary, the magnetic compass needle began spinning rapidly in circles...',
    items: ['Continue the story from this exact moment. What lies ahead?']
  },
  {
    id: 'geo-fw-1',
    domainId: 'geography',
    category: 'Forbidden Words',
    title: 'Topic: Mountains & Peaks',
    prompt: 'Describe a high mountain range without saying forbidden geography words!',
    items: ['Forbidden: High', 'Climb', 'Peak', 'Rock', 'Cold']
  },
  {
    id: 'geo-dai-1',
    domainId: 'geography',
    category: 'Describe an Image',
    title: 'Breathtaking Norwegian Fjord',
    prompt: 'Describe the dramatic steep cliffs, crystal blue waters, and serene grandeur of a Norwegian fjord.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'geo-ss-1',
    domainId: 'geography',
    category: 'Story Starter',
    title: 'The Teleporting Antique Globe',
    prompt: 'You spin a vintage brass globe in an antique shop, touch a random island, and instantly smell salt water and tropical breezes...'
  },
  {
    id: 'geo-eli5-1',
    domainId: 'geography',
    category: "Explain Like I'm Five",
    title: 'Why Earth Has Climate Zones',
    prompt: 'Explain why some parts of the world are hot while others are icy so simply a 5-year-old child understands.'
  },
  {
    id: 'geo-rf-1',
    domainId: 'geography',
    category: 'Rapid Fire',
    title: 'Global Speed Round',
    prompt: 'Answer 5 rapid geography questions!',
    items: [
      '1. Your favorite continent on Earth?',
      '2. Majestic mountains or tropical beaches?',
      '3. What is the highest altitude place you ever visited?',
      '4. Country at the very top of your bucket list?',
      '5. Hot tropical weather or crisp snowy weather?'
    ]
  },

  // ==========================================
  // 13. SCIENCE (🧬)
  // ==========================================
  {
    id: 'sci-rt-1',
    domainId: 'science',
    category: 'Random Topic',
    title: 'Renewable Energy Innovations',
    prompt: 'Speak about clean energy solutions that will power cities in the next 50 years.'
  },
  {
    id: 'sci-smt-1',
    domainId: 'science',
    category: 'Sell Me This',
    title: 'A Pocket Microscope',
    prompt: 'Pitch a tiny pocket microscope to a non-scientist as a tool to unlock a hidden microscopic universe.'
  },
  {
    id: 'sci-wyr-1',
    domainId: 'science',
    category: 'Would You Rather',
    title: 'Cure All Diseases or End World Hunger?',
    prompt: 'Would you rather invent a scientific cure for every illness or a solution that ends global food shortages forever?'
  },
  {
    id: 'sci-3rw-1',
    domainId: 'science',
    category: '3 Random Words',
    title: 'Genome • Catalyst • Photon',
    prompt: 'Construct a compelling sci-fi story using all three scientific terms.',
    items: ['Genome', 'Catalyst', 'Photon']
  },
  {
    id: 'sci-cts-1',
    domainId: 'science',
    category: 'Continue the Story',
    title: 'The Glowing Beaker',
    prompt: 'The chemical reaction stabilized, and the liquid inside the glass beaker began emitting a soft, gravity-defying blue light...',
    items: ['Continue the story from this exact moment. What property does it possess?']
  },
  {
    id: 'sci-fw-1',
    domainId: 'science',
    category: 'Forbidden Words',
    title: 'Topic: Science Experiments',
    prompt: 'Describe doing a lab experiment without using forbidden scientific words!',
    items: ['Forbidden: Lab', 'Test', 'Chemistry', 'Biology', 'Experiment']
  },
  {
    id: 'sci-dai-1',
    domainId: 'science',
    category: 'Describe an Image',
    title: 'Glowing DNA Helix',
    prompt: 'Describe this luminous visualization of the double-helix DNA strand floating in a dark laboratory space.',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sci-ss-1',
    domainId: 'science',
    category: 'Story Starter',
    title: 'The Beaker Wormhole',
    prompt: 'During a late-night chemistry experiment, your mixture opens a stable, marble-sized wormhole floating inside a glass tube...'
  },
  {
    id: 'sci-eli5-1',
    domainId: 'science',
    category: "Explain Like I'm Five",
    title: 'Why the Sky is Blue',
    prompt: 'Explain why sunlight makes the sky look blue during the day so simply that a 5-year-old child understands.'
  },
  {
    id: 'sci-rf-1',
    domainId: 'science',
    category: 'Rapid Fire',
    title: 'Science Blitz',
    prompt: 'Answer 5 scientific prompts in 60 seconds!',
    items: [
      '1. Biology, Chemistry, or Physics?',
      '2. Greatest scientific breakthrough in history?',
      '3. Favorite science fiction book or movie?',
      '4. Should human cloning ever be allowed?',
      '5. What scientific question do you want answered most?'
    ]
  },

  // ==========================================
  // 14. MUSIC (🎵)
  // ==========================================
  {
    id: 'mus-rt-1',
    domainId: 'music',
    category: 'Random Topic',
    title: 'Music and Human Emotion',
    prompt: 'Speak about why a simple melody can evoke deep nostalgia, happiness, or tears.'
  },
  {
    id: 'mus-smt-1',
    domainId: 'music',
    category: 'Sell Me This',
    title: 'An Out-of-Tune Guitar',
    prompt: 'Pitch an old, weathered guitar with a missing string as a soul-filled songwriting instrument.'
  },
  {
    id: 'mus-wyr-1',
    domainId: 'music',
    category: 'Would You Rather',
    title: 'Master Every Instrument or Great Singer?',
    prompt: 'Would you rather fluently play every musical instrument on Earth or possess a world-class singing voice?'
  },
  {
    id: 'mus-3rw-1',
    domainId: 'music',
    category: '3 Random Words',
    title: 'Melody • Symphony • Tempo',
    prompt: 'Tell an inspiring story about a musician overcoming doubt using all three words.',
    items: ['Melody', 'Symphony', 'Tempo']
  },
  {
    id: 'mus-cts-1',
    domainId: 'music',
    category: 'Continue the Story',
    title: 'The Unfinished Symphony',
    prompt: 'The pianist sat down at the dusty grand piano, pressed a single chord, and the entire concert hall began to glow...',
    items: ['Continue the story from this exact moment. What happens next?']
  },
  {
    id: 'mus-fw-1',
    domainId: 'music',
    category: 'Forbidden Words',
    title: 'Topic: Playing Music',
    prompt: 'Describe listening to your favorite song without saying forbidden music terms!',
    items: ['Forbidden: Song', 'Play', 'Hear', 'Sound', 'Singer']
  },
  {
    id: 'mus-dai-1',
    domainId: 'music',
    category: 'Describe an Image',
    title: 'Grand Concert Hall Spotlights',
    prompt: 'Describe the grand wooden stage, golden spotlights, and dramatic ambiance of a symphony hall.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mus-ss-1',
    domainId: 'music',
    category: 'Story Starter',
    title: 'The Dream Song',
    prompt: 'You hear a new song playing on the radio that is note-for-note a melody you composed in a dream last night...'
  },
  {
    id: 'mus-eli5-1',
    domainId: 'music',
    category: "Explain Like I'm Five",
    title: 'How Instruments Make Music',
    prompt: 'Explain how vibrating strings and air columns create music so simply a 5-year-old child understands.'
  },
  {
    id: 'mus-rf-1',
    domainId: 'music',
    category: 'Rapid Fire',
    title: 'Music Speed Round',
    prompt: 'Answer 5 rapid music questions!',
    items: [
      '1. Favorite genre of music?',
      '2. Best live concert you ever attended?',
      '3. Can you play any instrument?',
      '4. Do you listen to music while studying or working?',
      '5. Vinyl records or digital streaming?'
    ]
  },

  // ==========================================
  // 15. RELATIONSHIPS (❤️)
  // ==========================================
  {
    id: 'rel-rt-1',
    domainId: 'relationships',
    category: 'Random Topic',
    title: 'Active Listening in Connections',
    prompt: 'Speak about why active, empathetic listening is the single most valuable skill in human relationships.'
  },
  {
    id: 'rel-smt-1',
    domainId: 'relationships',
    category: 'Sell Me This',
    title: 'A Handwritten Letter',
    prompt: 'Pitch writing a physical handwritten letter to someone accustomed to quick text messages.'
  },
  {
    id: 'rel-wyr-1',
    domainId: 'relationships',
    category: 'Would You Rather',
    title: '100 Acquaintances or 2 Best Friends?',
    prompt: 'Would you rather have 100 popular acquaintances or 2 deep, lifelong loyal friends?'
  },
  {
    id: 'rel-3rw-1',
    domainId: 'relationships',
    category: '3 Random Words',
    title: 'Empathy • Loyalty • Harmony',
    prompt: 'Tell a heartwarming story about friendship incorporating all three words.',
    items: ['Empathy', 'Loyalty', 'Harmony']
  },
  {
    id: 'rel-cts-1',
    domainId: 'relationships',
    category: 'Continue the Story',
    title: 'The Unspoken Words',
    prompt: 'After five years of total silence, the phone rang and a familiar voice whispered "I think we left something unsaid..."',
    items: ['Continue the story from this exact moment. What is said next?']
  },
  {
    id: 'rel-fw-1',
    domainId: 'relationships',
    category: 'Forbidden Words',
    title: 'Topic: Friendship & Love',
    prompt: 'Describe caring deeply for a close friend without saying forbidden relationship words!',
    items: ['Forbidden: Heart', 'Like', 'Feel', 'Person', 'Care']
  },
  {
    id: 'rel-dai-1',
    domainId: 'relationships',
    category: 'Describe an Image',
    title: 'Friends Laughing Together',
    prompt: 'Describe two old friends sharing a genuine moment of laughter and connection on a sunny afternoon.',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rel-ss-1',
    domainId: 'relationships',
    category: 'Story Starter',
    title: 'The Keepsake Box',
    prompt: 'You open an old wooden box in your grandmother’s attic and find a bundle of letters exchanged between strangers in 1945...'
  },
  {
    id: 'rel-eli5-1',
    domainId: 'relationships',
    category: "Explain Like I'm Five",
    title: 'What Makes a Good Friend?',
    prompt: 'Explain what being a kind and loyal friend means so simply a 5-year-old child understands.'
  },
  {
    id: 'rel-rf-1',
    domainId: 'relationships',
    category: 'Rapid Fire',
    title: 'Human Connection Blitz',
    prompt: 'Answer 5 rapid relationship questions!',
    items: [
      '1. What trait do you value most in a friend?',
      '2. Quality time or thoughtful words?',
      '3. Best way to resolve a disagreement?',
      '4. Do opposites attract?',
      '5. What makes a relationship last?'
    ]
  },

  // ==========================================
  // 16. FOOD (🍔)
  // ==========================================
  {
    id: 'foo-rt-1',
    domainId: 'food',
    category: 'Random Topic',
    title: 'Comfort Food and Cultural Heritage',
    prompt: 'Speak about how food brings family together and preserves ancestral culture.'
  },
  {
    id: 'foo-smt-1',
    domainId: 'food',
    category: 'Sell Me This',
    title: 'Burnt Toast as Gourmet Delicacy',
    prompt: 'Pitch a slice of slightly charred toast as a rustic, smoky artisanal culinary experience.'
  },
  {
    id: 'foo-wyr-1',
    domainId: 'food',
    category: 'Would You Rather',
    title: 'Sweet Food or Savory Food Forever?',
    prompt: 'Would you rather eat only sweet foods for the rest of your life or only savory foods?'
  },
  {
    id: 'foo-3rw-1',
    domainId: 'food',
    category: '3 Random Words',
    title: 'Recipe • Spice • Umami',
    prompt: 'Tell a funny or mouth-watering story using all three culinary words.',
    items: ['Recipe', 'Spice', 'Umami']
  },
  {
    id: 'foo-cts-1',
    domainId: 'food',
    category: 'Continue the Story',
    title: 'The Master Dish',
    prompt: 'The chef lifted the silver dome cover, revealing a dish that smelled exactly like my grandmother’s kitchen in 1998...',
    items: ['Continue the story from this exact moment. Describe the first bite.']
  },
  {
    id: 'foo-fw-1',
    domainId: 'food',
    category: 'Forbidden Words',
    title: 'Topic: Cooking a Meal',
    prompt: 'Describe preparing a meal in a kitchen without saying forbidden food terms!',
    items: ['Forbidden: Food', 'Eat', 'Kitchen', 'Cook', 'Taste']
  },
  {
    id: 'foo-dai-1',
    domainId: 'food',
    category: 'Describe an Image',
    title: 'Vibrant Spice Market',
    prompt: 'Describe the rich colors, aromas, and lively atmosphere of a traditional outdoor spice market.',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'foo-ss-1',
    domainId: 'food',
    category: 'Story Starter',
    title: 'The Memory Soup Recipe',
    prompt: 'You cook a soup from an old handwritten recipe book and realize each spoon triggers a vivid happy memory...'
  },
  {
    id: 'foo-eli5-1',
    domainId: 'food',
    category: "Explain Like I'm Five",
    title: 'How Taste Buds Work',
    prompt: 'Explain how your tongue tastes sweet, salty, and sour flavors so simply a 5-year-old child understands.'
  },
  {
    id: 'foo-rf-1',
    domainId: 'food',
    category: 'Rapid Fire',
    title: 'Culinary Speed Round',
    prompt: 'Answer 5 rapid food questions!',
    items: [
      '1. Your all-time favorite meal?',
      '2. Sweet or savory snacks?',
      '3. Are you a good cook?',
      '4. Favorite global cuisine (Italian, Mexican, Asian, etc.)?',
      '5. What food do you refuse to eat?'
    ]
  },

  // ==========================================
  // 17. TRAVEL (🌍)
  // ==========================================
  {
    id: 'trv-rt-1',
    domainId: 'travel',
    category: 'Random Topic',
    title: 'How Travel Transforms Your Perspective',
    prompt: 'Speak about how immersing yourself in a foreign culture dismantles prejudice and builds empathy.'
  },
  {
    id: 'trv-smt-1',
    domainId: 'travel',
    category: 'Sell Me This',
    title: 'A Lost Luggage Bag',
    prompt: 'Pitch an unclaimed suitcase at airport auction as a mystery box filled with foreign treasures.'
  },
  {
    id: 'trv-wyr-1',
    domainId: 'travel',
    category: 'Would You Rather',
    title: 'Backpack World Tour or 5-Star Resort?',
    prompt: 'Would you rather travel the world for a year on a tight budget or stay at a 5-star luxury resort for one week?'
  },
  {
    id: 'trv-3rw-1',
    domainId: 'travel',
    category: '3 Random Words',
    title: 'Passport • Horizon • Wanderlust',
    prompt: 'Tell a captivating story about an unforgettable journey using these three words.',
    items: ['Passport', 'Horizon', 'Wanderlust']
  },
  {
    id: 'trv-cts-1',
    domainId: 'travel',
    category: 'Continue the Story',
    title: 'The Wrong Station',
    prompt: 'I boarded the wrong train in Tokyo and ended up at a quiet coastal village that was not listed on Google Maps...',
    items: ['Continue the story from this exact moment. What do you discover?']
  },
  {
    id: 'trv-fw-1',
    domainId: 'travel',
    category: 'Forbidden Words',
    title: 'Topic: Going on Vacation',
    prompt: 'Describe taking a trip abroad without saying forbidden travel words!',
    items: ['Forbidden: Flight', 'Hotel', 'Beach', 'Visit', 'Tour']
  },
  {
    id: 'trv-dai-1',
    domainId: 'travel',
    category: 'Describe an Image',
    title: 'Golden Hour Paris Street',
    prompt: 'Describe the romantic cobbled street, warm cafes, and golden evening light of Paris.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trv-ss-1',
    domainId: 'travel',
    category: 'Story Starter',
    title: 'The Swapped Suitcase',
    prompt: 'At baggage claim, you accidentally pick up an identical black suitcase containing a passport stamped in 1890...'
  },
  {
    id: 'trv-eli5-1',
    domainId: 'travel',
    category: "Explain Like I'm Five",
    title: 'Why Earth Has Time Zones',
    prompt: 'Explain why it is daytime in Tokyo when it is night in New York so simply a 5-year-old child understands.'
  },
  {
    id: 'trv-rf-1',
    domainId: 'travel',
    category: 'Rapid Fire',
    title: 'Wanderlust Blitz',
    prompt: 'Answer 5 travel questions quickly!',
    items: [
      '1. Window or aisle seat?',
      '2. Backpacking adventure or luxury resort?',
      '3. Most beautiful country you ever visited?',
      '4. Favorite travel souvenir?',
      '5. Where is your dream vacation destination?'
    ]
  },

  // ==========================================
  // 18. CREATIVITY (🎨)
  // ==========================================
  {
    id: 'cre-rt-1',
    domainId: 'creativity',
    category: 'Random Topic',
    title: 'Overcoming Creative Block',
    prompt: 'Speak about strategies to reignite inspiration when feeling stuck on a creative project.'
  },
  {
    id: 'cre-smt-1',
    domainId: 'creativity',
    category: 'Sell Me This',
    title: 'A Blank Canvas for $1,000',
    prompt: 'Pitch a pristine blank white canvas as a priceless symbol of infinite human potential.'
  },
  {
    id: 'cre-wyr-1',
    domainId: 'creativity',
    category: 'Would You Rather',
    title: 'Famous Painter or Legendary Author?',
    prompt: 'Would you rather be a world-renowned visual painter or a legendary novelist?'
  },
  {
    id: 'cre-3rw-1',
    domainId: 'creativity',
    category: '3 Random Words',
    title: 'Muse • Sketch • Masterpiece',
    prompt: 'Craft an inspiring story about an artist creating their defining work.',
    items: ['Muse', 'Sketch', 'Masterpiece']
  },
  {
    id: 'cre-cts-1',
    domainId: 'creativity',
    category: 'Continue the Story',
    title: 'The Animated Portrait',
    prompt: 'The painter dipped her brush in gold paint, made one final stroke on the canvas, and the portrait blinked...',
    items: ['Continue the story from this exact moment. What does the painting say?']
  },
  {
    id: 'cre-fw-1',
    domainId: 'creativity',
    category: 'Forbidden Words',
    title: 'Topic: Making Art',
    prompt: 'Describe creating artwork without using forbidden artistic words!',
    items: ['Forbidden: Paint', 'Draw', 'Picture', 'Color', 'Artist']
  },
  {
    id: 'cre-dai-1',
    domainId: 'creativity',
    category: 'Describe an Image',
    title: 'Sunlit Artist Studio',
    prompt: 'Describe the colorful oil paint splatters, canvases, and creative chaos of a sunlit loft studio.',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cre-ss-1',
    domainId: 'creativity',
    category: 'Story Starter',
    title: 'The Magic Sketchbook',
    prompt: 'You find a sketchbook in an old art shop where whatever drawing you finish materializes in real life for 24 hours...'
  },
  {
    id: 'cre-eli5-1',
    domainId: 'creativity',
    category: "Explain Like I'm Five",
    title: 'What is Imagination?',
    prompt: 'Explain what imagination is and how humans create new ideas so simply a 5-year-old child understands.'
  },
  {
    id: 'cre-rf-1',
    domainId: 'creativity',
    category: 'Rapid Fire',
    title: 'Creative Spark Blitz',
    prompt: 'Answer 5 rapid creativity prompts!',
    items: [
      '1. How do you trigger new ideas?',
      '2. Morning creator or late night creator?',
      '3. Favorite form of artistic expression?',
      '4. Do you keep a creative journal?',
      '5. Is every human born creative?'
    ]
  },

  // ==========================================
  // 19. FUNNY (😂)
  // ==========================================
  {
    id: 'fun-rt-1',
    domainId: 'funny',
    category: 'Random Topic',
    title: 'The Funniest Misunderstanding',
    prompt: 'Speak for one minute about the most hilarious awkward misunderstanding you have ever experienced or witnessed.'
  },
  {
    id: 'fun-smt-1',
    domainId: 'funny',
    category: 'Sell Me This',
    title: 'Invisible Pants',
    prompt: 'Pitch a pair of completely invisible luxury pants to a skeptical crowd.'
  },
  {
    id: 'fun-wyr-1',
    domainId: 'funny',
    category: 'Would You Rather',
    title: 'Loud Burp at Work or Laugh at Funerals?',
    prompt: 'Would you rather loudly burp every time you speak to your boss or laugh uncontrollably at serious moments?'
  },
  {
    id: 'fun-3rw-1',
    domainId: 'funny',
    category: '3 Random Words',
    title: 'Banana • Slip • Confetti',
    prompt: 'Tell a hilarious slapstick story incorporating all three words seamlessly.',
    items: ['Banana', 'Slip', 'Confetti']
  },
  {
    id: 'fun-cts-1',
    domainId: 'funny',
    category: 'Continue the Story',
    title: 'The Accidental Voice Note',
    prompt: 'I recorded a 30-second voice note venting about my friend, pressed send, and realized I sent it TO my friend...',
    items: ['Continue the story from this exact moment. How do you recover?']
  },
  {
    id: 'fun-fw-1',
    domainId: 'funny',
    category: 'Forbidden Words',
    title: 'Topic: Telling a Joke',
    prompt: 'Describe a hilarious situation without saying forbidden comedy words!',
    items: ['Forbidden: Funny', 'Laugh', 'Smile', 'Humorous', 'Pun']
  },
  {
    id: 'fun-dai-1',
    domainId: 'funny',
    category: 'Describe an Image',
    title: 'Dog in Sunglasses',
    prompt: 'Describe the ridiculous, confident swagger of a golden retriever wearing oversized neon sunglasses.',
    imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fun-ss-1',
    domainId: 'funny',
    category: 'Story Starter',
    title: 'The Rhyming Curse',
    prompt: 'You wake up on Tuesday morning and discover that every sentence you speak must rhyme perfectly or you sneeze...'
  },
  {
    id: 'fun-eli5-1',
    domainId: 'funny',
    category: "Explain Like I'm Five",
    title: 'Why Do Jokes Make People Laugh?',
    prompt: 'Explain why surprise and humor make us giggle so simply that a 5-year-old child understands.'
  },
  {
    id: 'fun-rf-1',
    domainId: 'funny',
    category: 'Rapid Fire',
    title: 'Humor Speed Round',
    prompt: 'Answer 5 funny prompts quickly!',
    items: [
      '1. Funniest movie you ever watched?',
      '2. Best cheesy dad joke you know?',
      '3. Who is the funniest person in your life?',
      '4. Do you laugh at your own jokes?',
      '5. Cats doing silly things or dogs doing silly things?'
    ]
  }
];

/**
 * Get all challenges for a specific domain.
 * If domainId is 'mixed' or invalid, returns default challenges pool combined with domain challenges.
 */
export function getChallengesForDomain(domainId: string): Challenge[] {
  if (!domainId || domainId === 'mixed') {
    // Return standard mixed pool + sample domain challenges
    return DEFAULT_CHALLENGES;
  }

  const domainSpecific = DOMAIN_CHALLENGES.filter((c) => c.domainId === domainId);
  if (domainSpecific.length > 0) {
    return domainSpecific;
  }

  return DEFAULT_CHALLENGES;
}

/**
 * Get challenges filtered by both domain and category.
 */
export function getChallengesForDomainAndCategory(
  domainId: string,
  categoryName?: string
): Challenge[] {
  const pool = getChallengesForDomain(domainId);
  if (!categoryName) return pool;

  const matched = pool.filter((c) => c.category === categoryName);
  if (matched.length > 0) return matched;

  // Fallback to default challenges for that category
  return DEFAULT_CHALLENGES.filter((c) => c.category === categoryName);
}
