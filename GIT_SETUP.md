# Git Setup and GitHub Instructions

## Initial Git Setup

If you haven't set up Git yet:

```bash
# Configure your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Setting Up Your Repository

### Step 1: Initialize Git (if not already done)
```bash
cd contact-list-app
git init
```

### Step 2: Create Repository on GitHub

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `contact-list-app`
5. Keep it Public (or Private if you prefer)
6. **Do NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 3: Add and Commit Files

```bash
# Add all files to staging
git add .

# Commit with a message
git commit -m "Initial commit: Contact List Application"

# Rename branch to main (if needed)
git branch -M main
```

### Step 4: Connect to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/contact-list-app.git
```

### Step 5: Push to GitHub

```bash
git push -u origin main
```

## Common Git Commands

### Making Changes
```bash
# Check status
git status

# Add specific file
git add filename.js

# Add all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push
```

### Viewing History
```bash
# View commit history
git log --oneline

# View what changed
git diff
```

### Branching
```bash
# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Merge branch
git merge feature-name
```

## .gitignore Overview

The following files/folders are already ignored:
- `node_modules/` - Dependencies
- `dist/` - Build output
- `.env` - Environment variables (if you add them)
- Log files
- Editor configs

## Troubleshooting

### "Remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/contact-list-app.git
```

### "Permission denied"
Make sure you're logged into GitHub and have proper permissions.

### "Nothing to commit"
Make sure you've made changes and saved your files.

## Deploying After Setup

Once your code is on GitHub:
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Wait for deployment
6. Copy the deployment URL
7. Update it in README.md

## Best Practices

✅ **Commit often**: Make small, logical commits
✅ **Write clear messages**: Describe what changed and why
✅ **Pull before push**: `git pull` to get latest changes
✅ **Use branches**: For new features or experiments
✅ **Review changes**: `git status` and `git diff` before committing

## Quick Workflow

```bash
# Daily workflow
git pull                    # Get latest changes
# ... make your changes ...
git add .                   # Stage changes
git commit -m "Your message" # Commit
git push                    # Push to GitHub
```

## Need Help?

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Git Tutorial](https://www.atlassian.com/git/tutorials)
