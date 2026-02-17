# Lumina Festival 2025

Lumina is a high-fidelity, immersive event landing page for a fictional futuristic audiovisual festival in Tokyo. It leverages modern web technologies to create a "sensory expedition" through generative art, fluid animations, and AI-driven interactions.

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Scroll transforms, layout animations, custom physics)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Intelligence**: [Google Gemini API](https://ai.google.dev/) (`gemini-3-flash-preview`)
- **Typography**: Syncopate (Headings) & Space Grotesk (Body)

## 🛠 Key Features

### 1. Immersive UI/UX
- **Fluid Backgrounds**: High-performance animated blobs and star fields using GPU-accelerated transforms.
- **Custom Cursor**: A context-aware "View" cursor that reacts to interactive elements.
- **Dynamic Lineup**: A grid of artist cards with hover-triggered zoom and detail modals.
- **Adaptive Header**: A mix-blend-mode navigation bar that remains legible across varying backgrounds.

### 2. LUMI AI Concierge
- **Real-time Chat**: Integrated chat interface powered by the `@google/genai` SDK.
- **Domain-Specific Logic**: Configured with system instructions to act as a festival guide, providing info on lineup, tickets, and event atmosphere.
- **Contextual Responses**: Fast, punchy, and "mysterious" personality to match the brand.

### 3. Interactive Motion
- **Parallax Effects**: Hero section utilizes `useScroll` and `useTransform` for depth.
- **Marquee**: Seamlessly looping ticker for high-energy branding.
- **Haptic-feel Buttons**: Interactive purchase flows with visual feedback and state transitions.

## 📂 Project Structure

- `/components`: UI building blocks (AIChat, ArtistCard, FluidBackground, etc.)
- `/services`: Core logic for external APIs (Gemini initialization and messaging).
- `App.tsx`: The main layout engine and scroll orchestration.
- `types.ts`: Centralized TypeScript interfaces for artists and chat messages.

## ⚙️ Developer Setup

### Environment Variables
The application requires a valid Gemini API key to power the AI features. This key is accessed via `process.env.API_KEY`.

### Integration
The project uses ESM modules via `esm.sh` imports in the `index.html` import map. No build step is required for standard usage in the provided environment, as imports are resolved at runtime.

### AI Configuration
LUMI's personality and knowledge base are defined in `services/geminiService.ts`. To modify the AI's behavior, update the `systemInstruction` in the `chatSession` configuration.

## 🌐 Performance Notes
- **Hardware Acceleration**: Blobs and large-scale blurs use `will-change-transform` and `translateZ(0)` to ensure 60fps animations.
- **Graceful Fallbacks**: Mobile-optimized layouts and reduced motion considerations for lower-end devices.

---
*Created by the Lumina Engineering Team.*