#!/bin/bash

# Build the application
npm run build

# Run database migrations
npx prisma migrate deploy

# Generate sitemap
npm run postbuild

# Deploy to Vercel
vercel --prod