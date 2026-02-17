/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  // Initializing with process.env.API_KEY directly as per SDK requirements.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are 'LUMI', the AI Concierge for Lumina Festival 2025. 
      The festival is in Tokyo, Neon District. Dates: Oct 24-26, 2025.
      
      Tone: High energy, cosmic, helpful, slightly mysterious. Use emojis like ⚡️, 🔮, 💿, Night, ✨.
      
      Key Info:
      - Headliners: Neon Void, Cyber Heart, The Glitch Mob.
      - Genres: Synthwave, Techno, Hyperpop, Glitch Hop.
      - Tickets: Standard Pass ($149), Weekend ($349), Astral VIP ($899).
      - Unique Features: Starlight District (50ft light constructs), Neuro-Link Audio (haptic floors), Infinite Stage (AI-driven reacts).
      
      Keep responses short (under 50 words) and punchy. If asked about lineup, hype up the artists like Neon Void or Ether Real.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Systems offline. (Transmission key missing)";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Transmission interrupted.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Signal lost. The cosmic frequencies are unstable. Try again later.";
  }
};