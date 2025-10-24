# Deployment Guide

## Deploying to Vercel (Recommended)

### Method 1: Deploy via Vercel Dashboard

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Initialize it as public or grant access if private

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Contact List Application"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at `https://your-app-name.vercel.app`

4. **Update README**
   - Copy your deployment URL
   - Update the "Live Demo" section in README.md

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? Select your account
   - Link to existing project? No
   - What's your project's name? contact-list-app
   - In which directory is your code located? ./
   - Want to override settings? No

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Deploying to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

## Deploying to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add to scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.js**
   Add base URL:
   ```javascript
   export default defineConfig({
     base: '/contact-list-app/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## Environment Variables (if needed)

If you add environment variables in the future:

1. **Create `.env` file** (locally)
   ```
   VITE_API_URL=https://your-api.com
   ```

2. **Add to Vercel**
   - Go to Project Settings
   - Navigate to Environment Variables
   - Add your variables

3. **Access in code**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

## Post-Deployment Checklist

- [ ] Test all features on production
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test search functionality
- [ ] Test add/delete contact features
- [ ] Check console for errors
- [ ] Verify loading states
- [ ] Test on different browsers
- [ ] Update README with deployment URL
- [ ] Share the link!

## Troubleshooting

### Build Fails
- Check Node.js version (should be 14+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for any ESLint errors

### 404 on Routes
- Vercel handles this automatically for SPAs
- For other platforms, add redirect rules

### Slow Loading
- Optimize images
- Use lazy loading for components
- Consider code splitting

## Custom Domain (Optional)

1. Purchase a domain
2. In Vercel/Netlify dashboard:
   - Go to Domains
   - Add custom domain
   - Follow DNS configuration instructions
3. Wait for DNS propagation (24-48 hours)
