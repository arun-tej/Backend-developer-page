# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Frontend Deployment Guide

This React application uses Create React App with CRACO for customization.

## Deployment to Vercel

The application is configured for deployment to Vercel with the following settings:

1. Uses `--legacy-peer-deps` flag to handle dependency conflicts
2. Custom build command specified in `vercel.json`
3. Resolution overrides in `package.json` to fix version conflicts

## Environment Variables

For local development, create a `.env` file in this directory with any required environment variables.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run vercel-build`

Special build command for Vercel deployment that handles dependency conflicts.
