# 🌤️ Modern Weather Forecast App

A weather forecast application built with **React 19**, **Vite**, and **Material UI (MUI)**. It provides real-time weather details and atmospheric conditions for any city worldwide using the OpenWeatherMap API.

---

## ✨ Features

- **Live Weather Data**: Real-time temperature, humidity, feels-like, and min/max temperatures.
- **Dynamic Atmospheric UI**: Context-aware imagery and weather icons that change based on conditions (sunny, rainy, cold, or cloudy).
- **Glassmorphic Aesthetic**: Designed with sleek frosted glass cards, smooth gradients, and *Plus Jakarta Sans* typography.
- **Secure Configuration**: API keys are isolated using environment variables (`.env`) and kept safe from version control.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd mini-project-react
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
1. Copy the sample environment file to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and insert your [OpenWeatherMap API Key](https://openweathermap.org/api):
   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

### 4. Run the development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 🛠️ Built With

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI (MUI)](https://mui.com/)
- [OpenWeatherMap API](https://openweathermap.org/)
