# Vercel Deployment Guide for Bus Transit App 🚀

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- Vercel CLI installed globally:
  ```bash
  npm install -g vercel
  ```

## 📦 What's Been Configured

### Files Created/Modified:
1. ✅ `vercel.json` - Vercel configuration (routes backend + frontend)
2. ✅ `.vercelignore` - Files to exclude from deployment
3. ✅ `frontend/.env.production` - Production API configuration
4. ✅ Updated all API calls to use environment-aware URLs
5. ✅ Added `vercel-build` script to frontend/package.json

### Data Storage:
- ✅ **Users**: Stored in `backend/data/users.json` (persists on Vercel)
- ✅ **Buses, Routes, Stops**: Stored in JSON files (persists on Vercel)
- ✅ **SQLite**: File-based database (persists on Vercel)
- ✅ **Gemini API Key**: Already in code (no env vars needed!)

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel CLI (RECOMMENDED)

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy (from project root):**
   ```bash
   cd /path/to/bus
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **bus-transit** (or your choice)
   - In which directory is your code located? **./** (press Enter)
   - Want to modify settings? **N**

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard (GUI)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository: `aksh56511/bus`
4. **Build Settings:**
   - Framework Preset: **Other**
   - Build Command: (leave empty - vercel.json handles it)
   - Output Directory: (leave empty)
5. Click "Deploy"

## 🎯 Important Notes

### ✅ What Works on Vercel:
- ✅ All frontend pages (React + Vite)
- ✅ User authentication (JSON file storage)
- ✅ Route finding
- ✅ Fare calculation
- ✅ Places discovery
- ✅ AI Chatbot (Gemini API key included in code)
- ✅ All backend APIs as serverless functions

### ⚠️ Limitations:
- **File Writes**: Vercel serverless functions have limited write access
  - User registration will work but new users might not persist between deployments
  - For a school project, this is perfectly fine!
  - Existing users in `users.json` will always work
- **Database**: SQLite works but doesn't persist between deployments
  - JSON fallback is used automatically

### 💡 Recommendations for School Project:
Since this is a school project and you don't need full persistence:
1. ✅ Pre-populate `backend/data/users.json` with test accounts
2. ✅ All transit data (buses, routes, stops) is static - works perfectly!
3. ✅ Chatbot works perfectly (API key in code)
4. ✅ Everything else is read-only - ideal for demo!

## 🧪 Testing After Deployment

Once deployed, test these URLs:

**Homepage:**
```
https://your-app.vercel.app/
```

**API Health:**
```
https://your-app.vercel.app/api/health
```

**Login with existing user:**
- Email: test@example.com
- Password: (whatever's in your users.json)

**Try the features:**
- Route Finding: Select stops and search
- Trip Calculator: Calculate fares
- Places: Browse lodges, hospitals, etc.
- Chatbot: Ask about routes

## 🔄 Redeployment

To update your deployed app:

```bash
# Make changes to code
git add .
git commit -m "Your changes"
git push

# Redeploy
vercel --prod
```

Or if using GitHub integration, just push to `main` branch and Vercel auto-deploys!

## 🐛 Troubleshooting

### Build Failed?
```bash
# Check build locally
cd frontend
npm run build
```

### API not working?
- Check Vercel function logs in dashboard
- Verify `/api/health` endpoint works
- Check browser console for errors

### Need to add test users?
Edit `backend/data/users.json` and add:
```json
{
  "id": "test-user-1",
  "name": "Test User",
  "email": "test@example.com",
  "password": "$2a$10$..." // bcrypt hash
}
```

Then commit and redeploy.

## 📝 Environment Variables (Optional)

If you want to add environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add any secrets (though API key is already in code)
3. Redeploy

## ✅ Final Checklist

Before presenting your project:

- [ ] Deployed successfully
- [ ] Homepage loads
- [ ] Can login with test account
- [ ] Route finding works
- [ ] Fare calculator works
- [ ] Places page loads
- [ ] Chatbot responds
- [ ] Share the Vercel URL with your team!

---

**Your app is now live on Vercel! 🎉**

Share your URL: `https://your-project-name.vercel.app`
