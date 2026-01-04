# Всесвіт Звуків - Official Website

Official website for **Всесвіт Звуків** (Universe of Sounds) - an educational center in Kryvyi Rih, Ukraine, offering kindergarten services and speech therapy correctional club for children.

## 🌐 Live Website

Visit the live site: [vsesvit-zvukiv.com.ua](https://vsesvit-zvukiv.com.ua)

## About the Project

This is a modern, responsive website built with React, TypeScript, and Vite. The website showcases two main services:
- **Дитячий садок** (Kindergarten) - Comprehensive child development program
- **Корекційний клуб** (Correctional Club) - Speech therapy and correctional services

The website features smooth animations, responsive design for mobile and desktop, and an intuitive user interface.

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React Slick** - Image carousels

## Environment Setup

### Local Development

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Web3Forms access key to `.env.local`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_here
   ```

3. Get your access key from [Web3Forms](https://web3forms.com/)

4. Restart the dev server after adding the key:
   ```bash
   npm run dev
   ```

### Production Deployment (GitHub Pages)

The site is automatically deployed to GitHub Pages via GitHub Actions. To enable the contact form in production:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add a secret with:
   - **Name**: `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value**: Your Web3Forms access key
5. Click **Add secret**

The next deployment will automatically include the access key in the build process.

**Important**: Never commit `.env.local` to git! It's already in `.gitignore`.
