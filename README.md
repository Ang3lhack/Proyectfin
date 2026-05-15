SmartAura: AI-Driven IoT Environment Intelligence System 🌿✨
Live Demo: https://fanciful-lollipop-cf1874.netlify.app/

📌 Project Overview
SmartAura is a sophisticated Digital Twin IoT Ecosystem designed to harmonize indoor environments through Artificial Intelligence and real-time data. Developed for the Internet Programming course, this project bypasses the need for physical hardware by simulating IoT sensor nodes (Temperature, Humidity, Light) and combining them with external environmental factors (Local Weather, Location, Time) and Computer Vision.

The core objective is to provide a personalized wellbeing experience, recommending specific fragrance blends (essential oils) based on the user's immediate surroundings and personal preferences, stored in a cloud-based historical database.

🚀 Key Features
Digital Twin IoT Simulation: Interactive sliders representing real-time sensor data (Temp, Hum, Lux).

Multimodal AI Vision: Integration with Google Gemini 1.5 Flash to analyze room aesthetics and style from uploaded photos.

Global Context Integration: Real-time fetching of local weather data and geolocation via Open-Meteo and Nominatim APIs.

Intelligent Feedback Loop: A "Like/Dislike" system that allows the AI to learn and adapt to user fragrance preferences over time.

Weekly Predictive Planning: AI-generated shopping lists and fragrance schedules based on 7-day weather forecasts.

Cloud Persistence: Full integration with Supabase for historical logging and preference memory.

🏗️ System Architecture
The following diagram illustrates the data flow between the client, the serverless backend, and the specialized APIs:

graph TD
    A[User / Frontend UI] -->|Manual Input / Photo| B[Netlify Functions - Node.js]
    A -->|Fetch Local Weather| C[Open-Meteo API]
    A -->|Reverse Geocoding| D[Nominatim API]
    B -->|Multimodal Prompt| E[Google Gemini 1.5 Flash]
    E -->|AI Recommendation| B
    B -->|JSON Response| A
    A -->|Persist Data / Feedback| F[Supabase Database]
    F -->|Historical Context| B
🛠️ Tech Stack
Frontend: Vanilla JavaScript (ES6+), HTML5, CSS3 (Modern UI/UX with Glassmorphism).

Backend: Node.js hosted on Netlify Functions (Serverless Architecture).

AI Engine: Google Generative AI (Gemini 1.5 Flash).

Database: Supabase (PostgreSQL) for high-performance data persistence.

Deployment: Continuous Integration via GitHub & Netlify.

📋 Installation & Local Development
Prerequisites
Node.js (v18 or higher)

Netlify CLI (npm install -g netlify-cli)

Setup
Clone the repository:

Bash
git clone https://github.com/Ang3lhack/Proyectfin.git
cd smartaura
Install dependencies:

Bash
npm install
Configure Environment Variables:
Create a .env file in the root directory:

Plaintext
GEMINI_API_KEY=your_google_ai_studio_key_here
Run the local development server:

Bash
netlify dev
Access the app at http://localhost:8888.

📖 User Guide
Calibrate Sensors: Use the sliders to set the current temperature, humidity, and light levels of your room.

Visual Input (Optional): Upload a photo of your room so the AI can analyze the furniture style and color palette.

Analyze: Click "Execute Intelligent Analysis". The AI will process your local data, the outdoor Guadalajara weather, and your history to suggest a fragrance blend.

Train the AI: Use the 👍/👎 buttons. This data is saved to Supabase so the next recommendation is more aligned with your tastes.

Plan Ahead: Click "Weekly Shopping List" to get a 7-day fragrance plan based on the upcoming weather forecast.

🧠 Engineering Context
As a Computer Engineering student, this project focuses on the intersection of Artificial Intelligence and Wellbeing Technology. The implementation explores how serverless architectures and multimodal LLMs can replace traditional hardware constraints in the research of human-environment interaction.

Developed by: Angel Gael

Academic Year: 2026 - 4th Semester, Computer Engineering.
