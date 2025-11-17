# (1) create .gitignore to avoid committing node_modules and secret files
echo "node_modules
.env
backend/config/keys.env
.DS_Store" > .gitignore

# (2) init git if not already
git init

# (3) stage & commit
git add .
git commit -m "Initial import of transit backend"

# (4) create remote and push
# Option A: using GitHub CLI (recommended if authenticated)
# replace <OWNER>/<REPO> with your repo path
# gh repo create <OWNER>/<REPO> --public --source=. --remote=origin --push

# Option B: manual remote (create repo on github.com first)
# replace the URL with your repository HTTPS or SSH URL
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git branch -M main
git push -u origin main
