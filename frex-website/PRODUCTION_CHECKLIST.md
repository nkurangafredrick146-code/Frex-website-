# Production Deployment Checklist

## Pre-Deployment
- [ ] Set up PostgreSQL database (Vercel Postgres, AWS RDS, or similar)
- [ ] Configure all environment variables
- [ ] Set up Contentful space and content models
- [ ] Configure Resend for email
- [ ] Set up Sentry for error tracking
- [ ] Configure Vercel Blob for file storage

## Deployment
- [ ] Run database migrations: `npx prisma migrate deploy`
- [ ] Deploy to Vercel: `vercel --prod`
- [ ] Verify all environment variables are set in Vercel dashboard

## Post-Deployment
- [ ] Test contact form submission
- [ ] Test job application with file upload
- [ ] Verify email notifications are working
- [ ] Check Sentry for any errors
- [ ] Verify sitemap is generated: `https://frex.com/sitemap.xml`
- [ ] Test blog posts loading from Contentful
- [ ] Verify social sharing buttons work
- [ ] Check analytics are tracking properly

## Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure alerting for errors
- [ ] Set up performance monitoring
- [ ] Monitor database performance