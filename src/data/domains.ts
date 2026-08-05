export interface Domain {
  id: string;
  name: string;
  emoji: string;
}

export const DOMAINS: Domain[] = [
  { id: 'mixed', name: 'Mixed (Default)', emoji: '🎲' },
  { id: 'entrepreneurship', name: 'Entrepreneurship', emoji: '💼' },
  { id: 'space', name: 'Space', emoji: '🚀' },
  { id: 'politics', name: 'Politics', emoji: '🏛' },
  { id: 'psychology', name: 'Psychology', emoji: '🧠' },
  { id: 'spirituality', name: 'Spirituality', emoji: '🕉' },
  { id: 'finance', name: 'Finance', emoji: '💰' },
  { id: 'ai', name: 'Artificial Intelligence', emoji: '🤖' },
  { id: 'movies', name: 'Movies', emoji: '🎬' },
  { id: 'sports', name: 'Sports', emoji: '⚽' },
  { id: 'gaming', name: 'Gaming', emoji: '🎮' },
  { id: 'history', name: 'History', emoji: '📚' },
  { id: 'geography', name: 'Geography', emoji: '🌎' },
  { id: 'science', name: 'Science', emoji: '🧬' },
  { id: 'music', name: 'Music', emoji: '🎵' },
  { id: 'relationships', name: 'Relationships', emoji: '❤️' },
  { id: 'food', name: 'Food', emoji: '🍔' },
  { id: 'travel', name: 'Travel', emoji: '🌍' },
  { id: 'creativity', name: 'Creativity', emoji: '🎨' },
  { id: 'funny', name: 'Funny', emoji: '😂' },
];
