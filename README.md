# Lab 8 — Vercel Frontend Deployment

**Student:** Abdullah Nasir
**Roll Number:** 01-131232-008
**Class:** BSE-6
**Instructor:** Engr. Salman Zafar
**University:** Bahria University, Islamabad

## Live Production URL
https://my-lab8-app.vercel.app

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/hello | GET | Basic serverless function |
| /api/student/[id] | GET | Dynamic route — try /001 /002 /008 |
| /api/student/999 | GET | Returns 404 Not Found |
| /api/submit | POST | Accepts JSON with name and roll |
| /api/geo | GET | Edge function — geolocation |

## Run Locally
npm install
npm run dev
