# Iteritas - Travel Exquisitely

Iteritas is a sophisticated travel exploration platform prototype built using Next.js and Generative AI. It allows users to search for destinations using natural language, explore curated content via social-style reels, and plan their next adventure with ease.

## Features

- **AI Search:** Search for trips using natural language (e.g., "a quiet escape for next weekend").
- **Explore Reels:** A dedicated vertical video section in the "For You" tab featuring curated travel content.
- **Traverse Tab:** A immersive gallery of high-quality travel videos.
- **Personalized Feed:** Mix of hotel, flight, and restaurant recommendations.
- **Theming:** Full support for System, Light, and Dark modes.
- **Responsive Design:** Optimized for mobile-first interaction with a persistent bottom navigation bar.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration:** [Genkit](https://github.com/firebase/genkit) & [Google Gemini](https://ai.google.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Space Grotesk (Headlines) & Inter (Body)

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/ai`: Genkit flows, prompts, and configuration.
- `src/components`: Reusable UI components (Shadcn and custom).
- `src/lib`: Utilities and shared data (like placeholder images).

## Getting Started

1. Set up your `.env` file with a `GEMINI_API_KEY`.
2. Run `npm install`.
3. Start the development server with `npm run dev`.


