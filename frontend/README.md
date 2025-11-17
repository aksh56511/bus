# Bus Frontend (React + Vite)

This is a minimal React frontend scaffold for the Transit app.

Requirements
- Node.js 18+ (recommended)

Run locally

```bash
cd frontend
npm install
npm run dev
```

The backend is expected at `http://localhost:3000`. API helper functions in `src/utils/api.js` point to that URL.

Files of interest
- `src/pages/Home.jsx` - main layout
- `src/components/*` - UI components
- `src/utils/api.js` - backend API helpers

Replace the map placeholder in `MapPlaceholder.jsx` with a real map (Leaflet/Mapbox/Google Maps) as needed.
